import { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          //setAuth(user.username, user.password); Más abajo tienes la definición de este método
        } else {
          const userAux = JSON.parse(localStorage.getItem("user"));
          if (userAux) {
            setUser(userAux);
          }
        }
      }, [user]);

    return (
        <AppContext.Provider value={[user, setUser]}>
            {children}
        </AppContext.Provider>
    );
}

export default UserProvider;