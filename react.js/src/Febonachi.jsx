import { useState } from 'react';


export default function FibonacciApp() {
  const [number, setNumber] = useState(0); // Input value
  const [result, setResult] = useState(0); // Fibonacci result


  // Recursive Fibonacci function with memoization
  const fibonacci = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n === 0) return 0;
    if (n === 1) return 1;


    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
  };


  // Handle input change and calculate Fibonacci
  const handleChange = (e) => {
    const value = Number(e.target.value);
    setNumber(value);
    setResult(fibonacci(value)); // Calculate Fibonacci
  };


  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Fibonacci Calculator</h1>
      <label htmlFor="number">Enter a number:</label>
      <input
        id="number"
        type="number"
        value={number}
        onChange={handleChange}
        style={{ margin: '0 10px', padding: '5px' }}
        />
        <h2>Fibonacci Result: {result}</h2>
      </div>
   );
  }
  
