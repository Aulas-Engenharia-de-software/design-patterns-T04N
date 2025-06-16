import React from 'react';
import { CountProvider } from './CountContext';
import ChildA from './ChildA';
import ChildB from './ChildB';

const App: React.FC = () => {
  return (
    <CountProvider>
      <h1>Com Observer (Context API)</h1>
      <ChildA />
      <ChildB />
    </CountProvider>
  );
};

export default App;
