import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { DecodeJWT } from '../utils/DecodeJWT';

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

  // Logout function
  const logout = () => {
    localStorage.removeItem('token')
    setUser({
      'id': '',
      'username': '',
      'email': '',
      'address': '',
      'phone': '',
      'roles': ''
    })
    setLoginStatus(false)
  }

  // Function to check if token exist then decode the token and fetch user data
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      // decode JWT token
      const userInfo = DecodeJWT()

      if (userInfo) {
        setUser({
          'id': userInfo.id,
          'roles': userInfo.rls
        })

        // Fetch additional user data from backend
        const fetchUserData = async () => {
          try {
            const response = await axios.post('http://127.0.0.1:5000/user/userData', {
              'id': userInfo.id
            });

            // Check for response data and status
            if (response && response.status === 200) {
              const { username, email, address, phone } = response.data;
              setUser(prevData => ({
                ...prevData,
                'username': username,
                'email': email,
                'address': address,
                'phone': phone
              }))
              setLoginStatus(true)
            } else {
              console.error("Failed get response data - UserContext: ", response.data.message)
            }

          } catch (error) {
            console.error(error.message)
          }
        }

        fetchUserData()
      }
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, loginStatus, setLoginStatus, logout }}>
      {children} {/* Render children components here */}
    </UserContext.Provider>
  );
};

// Create a custom hook for consuming the context
export const useUser = () => useContext(UserContext);