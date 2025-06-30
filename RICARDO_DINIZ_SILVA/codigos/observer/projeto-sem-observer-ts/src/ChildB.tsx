import React from 'react';

interface Props {
  count: number;
}

const ChildB: React.FC<Props> = ({ count }) => {
  return (
    <div>
      <h2>Child B</h2>
      <p>Valor observado: {count}</p>
    </div>
  );
};

export default ChildB;
