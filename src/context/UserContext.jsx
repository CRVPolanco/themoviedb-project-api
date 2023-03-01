import { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../services/fetchUser';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {

  const redirection = useNavigate();

  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const [actualUser, setActualUser] = useState(null);

  const LOGIN = async (data) => {

    setLoading(true);
    const getUser = await fetchUser(data.email);

    console.log(getUser);

    if(!getUser){
      setLoading(false);
      return "User doesn't exists";
    }

    if(getUser.password !== data.password){
      setLoading(false);
      return "Incorrect password";
    }

    setActualUser({ ...getUser });
    setLoading(false);
    redirection('/');
  };

  const REGISTER = ({ data }) => {

    setLoading(true);
    setTimeout(() => {
      const allUsers = [...users];
      const index = allUsers.findIndex(u => u.email === data.email);

      if(!!index){
        setLoading(false);
        throw new Error("User exists");
      }

      if(!index){
        setUser({ ...data });
        setLoading(false);
      }

    }, 2000);

  };

  const LOGOUT = () => setActualUser(null);

  return (
    <UserContext.Provider value={{
      actualUser,
      LOGIN,
      REGISTER,
      LOGOUT,
    }}>
      {children}
    </UserContext.Provider>
  )

}

export { UserContext, UserContextProvider };
