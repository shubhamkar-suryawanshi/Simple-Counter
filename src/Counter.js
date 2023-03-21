import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <button
        onClick={() => {
          return setCount((prevCount) => {
            return prevCount - 1;
          });
        }}
      >
        Decrement
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          return setCount((prevCount) => {
            return prevCount + 1;
          });
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
