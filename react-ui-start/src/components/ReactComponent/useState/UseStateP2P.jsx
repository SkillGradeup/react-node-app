import { Button } from '@mui/material';
import { useState } from 'react';

export default function UseStateP2P() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <Button onClick={handleClick}>
      Clicked {count} times
    </Button>
  );
}
