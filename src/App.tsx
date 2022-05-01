import { useState } from 'react';
import Card from './components/Card';
import logo from './logo.svg';

import { tw } from 'twind';
import { Counter } from './features/Counter';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={tw``}>
      UPRAKE
      <Card></Card>
      <Counter></Counter>
    </div>
  );
}

export default App;
