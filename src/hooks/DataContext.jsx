// DataContext.js

import React, { createContext, useContext } from 'react';
import data from '../assets/data/data.js';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
