import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    if (user != null) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      const userAux = JSON.parse(localStorage.getItem("user"));
      if (userAux) {
        setUser(userAux);
      }
    }
  }, [user]);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AppContext.Provider value={[user, setUser, logout]}>
      {children}
    </AppContext.Provider>
  );
};

export default UserProvider;
