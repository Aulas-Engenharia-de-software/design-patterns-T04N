import React, { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Sem Observer (Props)</h1>
      <ChildA count={count} setCount={setCount} />
      <ChildB count={count} />
    </div>
  );
};

export default App;
