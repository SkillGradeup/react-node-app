import { Button } from '@mui/material';
import { useState } from 'react';

export default function UseStateP2P() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update symonteniously</h1>
      <Button onClick={handleClick}>Clicked {count} times</Button>
      <Button onClick={handleClick}>Clicked {count} times</Button>
    </div>
  );
}

