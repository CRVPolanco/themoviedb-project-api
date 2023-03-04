const fs = require('fs');
const data = require('../database/users.json');
const { path } = require('../path');

const route = `${path}/database/users.json`;

class User {

  makeFirstStructure(){
    if(!data)
      fs.writeFile(route, JSON.stringify({users:[]}), (e) => e ? console.error(e) : console.log('ok'));
  }

  generateId(){
    const id = "1234567890";
    let newId = "";
    for(let i=0; i<6; i++){
      newId += `${id.charAt(Math.floor(Math.random() * id.length))}`;
    }
    return Number(newId);
  }

  async getAll() {
    this.makeFirstStructure();
    return await [...data.users];
  }

  async existUser(email){
    this.makeFirstStructure();
    const exist =  data.users.some(u => email === u.email);
    return exist ? true : false;
  }

  async getUnique(email, password){
    this.makeFirstStructure();
    const getUser = await data.users.find(u => u.email === email);

    if(!getUser) return "user does not exists";

    const isCorrect = getUser.password === password;

    if(!isCorrect) return "invalid password";

    return getUser;
  }

  async createUser(body){

    this.makeFirstStructure();

    const exists = await data.users.findIndex(u => u.email === body.email)

    if(exists !== -1) return { message: 'user exists' };

    const id = this.generateId();
    const getAll = await [...data.users];
    const insert = { id: id, ...body.data, description:'', birth_date: '', movies_favorites: [] };
    const newData = [...getAll, { ...insert } ];
    const newBd = { ...data, users: [...newData] };

    fs.writeFile(route, JSON.stringify(newBd), (e) => e ? console.error(e) : console.log('ok'));

    return { message: 'user created', user: {...insert} };
  }

  async addFavorite(userId, movieData){
    this.makeFirstStructure();

    const findUser = await data.users.findIndex(u => u.id === Number(userId));
    const alreadyFavorite = await data.users[findUser].movies_favorites.findIndex(
      m => Number(m.id) === Number(movieData.id)
    );

    if(alreadyFavorite >= 0) return;

    const copyUser = {
      ...data.users[findUser],
      movies_favorites: [...data.users[findUser].movies_favorites, { ...movieData }],
    };
    const allUsers = await data.users.filter(u => u.id !== Number(userId));
    const newUsers = { ...data, users: [...allUsers, {...copyUser}] };

    fs.writeFile(route, JSON.stringify(newUsers), (e) => e ? console.error(e) : console.log('ok'));
    return { message: 'added successfully' };
  }

  async removeFavorite(userId, movieData){
    this.makeFirstStructure();

    const _user = await data.users.find(u => u.id === Number(userId));
    const getUserMovies = [..._user.movies_favorites];

    const newMovieArray = getUserMovies.filter(m => m.id !== movieData.id);
    const newUserAct = { ..._user, movies_favorites: [...newMovieArray] };

    const newUsers = await data.users.filter(u => u.id !== Number(userId));
    const newDbCopy = { ...data, users: [ ...newUsers, { ...newUserAct } ] };

    fs.writeFile(route, JSON.stringify(newDbCopy), (e) => e ? console.error(e) : console.log('ok'));

    return { message: 'removed successfully' };
  }

}

module.exports = { User };
