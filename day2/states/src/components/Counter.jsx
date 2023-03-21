import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increase</button>

      <br />
      <br />

      <h2>Amount: {amount}</h2>
      <button
        onClick={() => setAmount(1)}
        className={amount === 1 ? 'active' : ''}
      >
        1
      </button>
      <button
        onClick={() => setAmount(5)}
        className={amount === 5 ? 'active' : ''}
      >
        5
      </button>
      <button
        onClick={() => setAmount(10)}
        className={amount === 10 ? 'active' : ''}
      >
        10
      </button>
    </div>
  );
}

export default Counter;
