// src/context/UserContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the UserContext
const UserContext = createContext();

// UserProvider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    'id': '',
    'username': '',
    'email': '',
    'address': '',
    'phone': '',
    'roles': '',
  });
  const [loginStatus, setLoginStatus] = useState(false)
  
  return (
    <UserContext.Provider value={{ user, setUser, loginStatus, setLoginStatus }}>
      {children} {/* Render children components here */}
    </UserContext.Provider>
  );
};

// Create a custom hook for consuming the context
export const useUser = () => useContext(UserContext);