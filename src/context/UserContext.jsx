import { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { addFavorites, removeFavorites } from '../services/addFavorites';
import { fetchUser, registerUser } from '../services/fetchUser';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {

  const redirection = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [actualUser, setActualUser] = useState(null);

  const LOGIN = async (data) => {

    setLoading(true);
    const getUser = await fetchUser(data.email);

    console.log();

    if(getUser.data === 'user does not exists'){
      setLoading(false);
      setError("User does not exists");
      return;
    }

    if(getUser && (getUser.data.password !== data.password)){
      setLoading(false);
      setError('Incorrect password');
      return;
    }

    setActualUser({ ...getUser.data });
    setLoading(false);
    redirection('/');
  };

  const REGISTER = async (data) => {

    setLoading(true);

    const getUser = await fetchUser(data.email);

    if(getUser.data !== 'user does not exists'){
      setLoading(false);
      return setError("User already exists, create another");
    }

    const userData = await registerUser(data);

    if(userData.message === 'created successfully'){
      setLoading(false);
      setActualUser({ ...userData });
      return redirection('/');
    }

    setLoading(false);
    setActualUser({ ...getUser });
    redirection('/');
    return;

  }

  const toggleFavorites = async (movie) => {
    if(!actualUser)
      return redirection('/login');

    const doesExists = actualUser.movies_favorites.findIndex(m => m.id === movie.id);

    if(doesExists === -1){
      const rta = await addFavorites(actualUser.id, movie);
      console.log(rta);

      setActualUser({ ...actualUser, movies_favorites: [...actualUser.movies_favorites, { ...movie }] });
    }

    if(doesExists > 0){
      const rta = await removeFavorites(actualUser.id, movie);
      console.log(rta);

      setActualUser({ ...actualUser, movies_favorites: [...actualUser.movies_favorites.filter(m => m.id === movie.id)] });
    }

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
