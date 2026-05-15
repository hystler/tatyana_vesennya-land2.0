import React, { createContext, useContext, useState } from 'react';

const CursorContext = createContext();

export function useCursor() {
  return useContext(CursorContext);
}

export function CursorProvider({ children }) {
  const [cursorVariant, setCursorVariant] = useState('default');
  
  const setHover = () => setCursorVariant('hover');
  const setDefault = () => setCursorVariant('default');

  return (
    <CursorContext.Provider value={{ cursorVariant, setHover, setDefault }}>
      {children}
    </CursorContext.Provider>
  );
}
