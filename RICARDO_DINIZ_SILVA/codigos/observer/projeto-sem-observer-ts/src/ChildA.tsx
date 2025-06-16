import React from 'react';

interface Props {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const ChildA: React.FC<Props> = ({ count, setCount }) => {
  return (
    <div>
      <h2>Child A</h2>
      <p>Valor: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export default ChildA;
