import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if there's a user stored in local storage
    const loggedUser = localStorage.getItem('user');
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };
  const getButtonText = () => {
    return user && user.isNewUser ? 'Sign Out' : 'Logout';
  };

  

  const signup = async (userData) => {
    try {
      const response = await axios.post('http://localhost:9001/reg', userData);
      if (response.status === 200) {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return true;
      } else {
        console.log('Signup failed:', response.data);
        return false;
      }
    } catch (error) {
      console.error('There was an error signing up!', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  
  
  return (
    <UserContext.Provider value={{ user, login, signup, logout,getButtonText }}>
      {children}
    </UserContext.Provider>
  );
};
