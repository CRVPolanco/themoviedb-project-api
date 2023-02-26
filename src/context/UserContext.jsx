import { createContext } from 'react';
import { users } from '../mocks/users.json';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {

  const [actualUser, setActualUser] = useState({
    username: '',
    email: '',
    password: '',
    full_name: '',
  });

  const LOGIN = ({ data }) => {

    setLoading(true)
    setTimeout(() => {

      const allUsers = [...users];
      const index = allUsers.findIndex(u => u.email === data.email);

      if(!index){
        setLoading(false);
        throw new Error("User doesn't exists");
      }

      if(data.password !== index.password){
        setLoading(false);
        throw new Error("Incorrect password");
      }

      setActualUser({ ...actualUser, ...index });
      setLoading(false);
    }, 2000)

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

  const LOGOUT = () => setActualUser({ username: '', password: '', email: '', full_name: '' });

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
