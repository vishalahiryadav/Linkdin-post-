import {useMemo } from 'react';

export default function ExpensiveCalculation({ count }) {
  const compute = (num) => {
    console.log('Performing expensive calculation...');
    return num * 2;
  };

  // Memoize the result of the expensive calculation
  const memoizedResult = useMemo(() => compute(count), [count]);

  return <div>Result: {memoizedResult}</div>;
}
