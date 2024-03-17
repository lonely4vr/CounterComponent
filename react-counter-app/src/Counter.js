
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const incrementAfterDelay = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000); // Using timeout to set delay
  };

  const incrementTwice = () => {
    setCount(count + 1);
    setCount(count + 1); // calling this twice on purpose, this is the incorrect way
  };

  const correctIncrementTwice = () => {
    setCount((prevCount) => prevCount + 2); // Using state updater function
  };

  return (
    <div>
      <ul>
        <li><button onClick={increment}>Increment</button></li>
        <li><button onClick={incrementAfterDelay}>Increment After Delay</button></li>
        <li><button onClick={incrementTwice}>Increment Twice</button></li>
        <li><button onClick={correctIncrementTwice}>Correct Increment Twice</button></li>
      </ul>
      <p>Count: {count}</p>
    </div>
  );
  
}

export default Counter;
