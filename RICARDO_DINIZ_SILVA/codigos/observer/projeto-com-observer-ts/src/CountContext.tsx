import React, { createContext, useContext, useState } from 'react';

interface CountContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CountContext = createContext<CountContextType | undefined>(undefined);

export const CountProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = (): CountContextType => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error('useCount deve ser usado dentro de CountProvider');
  }
  return context;
};
