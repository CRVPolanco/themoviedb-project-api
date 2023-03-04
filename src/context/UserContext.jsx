import { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { addFavorites, removeFavorites } from '../services/addFavorites';
import { fetchUser, fetchUserByEmail, registerUser } from '../services/fetchUser';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {

  const redirection = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [actualUser, setActualUser] = useState(null);

  const LOGIN = async (user) => {

    setLoading(true);
    const getUser = await fetchUser({ email: user.email, password: user.password });

    console.log();

    if(getUser.data === 'user does not exists'){
      setLoading(false);
      setError("User does not exists");
      return;
    }

    if(getUser.data === 'invalid password'){
      setLoading(false);
      setError('Incorrect password');
      return;
    }

    setActualUser({ ...getUser.data });
    setLoading(false);
    setError('');
    redirection('/');
  };

  const REGISTER = async (data) => {

    setLoading(true);

    const getUser = await fetchUserByEmail(data.email);

    console.log(getUser);

    if(!!getUser.data){
      setLoading(false);
      return setError("User already exists, create another");
    }

    const userData = await registerUser(data);
    console.log(userData);

    if(userData.message === 'created successfully'){
      setLoading(false);
      setActualUser({ ...userData.user });
      return redirection('/');
    }

    setLoading(false);
    setActualUser({ ...userData.user });
    redirection('/');
    return;

  }

  const toggleFavorites = async (movie) => {
    if(!actualUser)
      return redirection('/login');

    const doesExists = actualUser.movies_favorites.some(m => m.id === movie.id);

    if(!doesExists){

      await addFavorites(actualUser.id, movie);
      setActualUser({ ...actualUser, movies_favorites: [...actualUser.movies_favorites, { ...movie }] });
      return;
    }

    await removeFavorites(actualUser.id, movie);
    setActualUser({ ...actualUser, movies_favorites: [...actualUser.movies_favorites.filter(m => m.id !== movie.id)] });

    return;
  }

  const LOGOUT = () => setActualUser(null);

  return (
    <UserContext.Provider value={{
      actualUser,
      error,
      loading,
      toggleFavorites,
      LOGIN,
      REGISTER,
      LOGOUT,
    }}>
      {children}
    </UserContext.Provider>
  )

}

export { UserContext, UserContextProvider };
