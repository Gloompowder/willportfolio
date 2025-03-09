// WindowSizeContext.js

import { createContext, useContext } from 'react';

const WindowSizeContext = createContext();

export const WindowSizeProvider = ({ children }) => {
  return (
    <WindowSizeContext.Provider value={{}}>
      {children}
    </WindowSizeContext.Provider>
  );
};

export const useWindowSize = () => {
  return useContext(WindowSizeContext);
};
