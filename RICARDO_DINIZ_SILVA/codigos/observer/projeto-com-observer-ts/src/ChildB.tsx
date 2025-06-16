import React from 'react';
import { useCount } from './CountContext';

const ChildB: React.FC = () => {
  const { count } = useCount();

  return (
    <div>
      <h2>Child B</h2>
      <p>Valor observado: {count}</p>
    </div>
  );
};

export default ChildB;
