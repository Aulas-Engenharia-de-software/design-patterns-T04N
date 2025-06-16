import React from 'react';
import { useCount } from './CountContext';

const ChildA: React.FC = () => {
  const { count, setCount } = useCount();

  return (
    <div>
      <h2>Child A</h2>
      <p>Valor: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export default ChildA;
