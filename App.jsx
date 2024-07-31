import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        Decrement ➖
      </button>
      <h1>Count - {count}</h1>
      <button
        onClick={() => {
          return setCount((prevCount) => {
            return prevCount + 1;
          });
        }}
      >
        Increment ➕
      </button>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
