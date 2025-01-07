import { useState } from 'react';

const FactorialCalculator = () => {
  const [number, setNumber] = useState(1);
  const [result, setResult] = useState(1);

  const calculateFactorial = (num) => {
    if (num <= 0) return 1;
    return num * calculateFactorial(num - 1);
  };

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setNumber(value);
    setResult(calculateFactorial(value));
  };

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={handleChange}
      />
      <p>Factorial of {number} is: {result}</p>
    </div>
  );
};

export default FactorialCalculator;
