import React, { useState, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, isOpened, setIsOpened }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
