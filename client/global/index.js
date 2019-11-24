import React, { useState, createContext } from 'react';

const useGlobalData = () => {
  const [user, setUser] = useState(null);

  return { user, setUser };
};

export const Context = createContext();

export const Provider = ({ children }) => (
  <Context.Provider value={useGlobalData()}>{children}</Context.Provider>
);
