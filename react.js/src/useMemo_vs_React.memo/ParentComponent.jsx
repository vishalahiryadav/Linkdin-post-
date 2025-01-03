import { useState, memo } from 'react';

const Child = memo(({ value }) => {
  console.log('Memoized Child re-rendered!');
  return <div>Value: {value}</div>;
});

const NonMemoChild = ({ value }) => {
  console.log('Non-memoized Child re-rendered!');
  return <div>Value: {value}</div>;
};

export default function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <input
        type="text"
        value={text}
        placeholder="Type something"
        onChange={(e) => setText(e.target.value)}
      />
      <Child value={count} />{' '}
      {/* Memoized child re-renders only when `count` changes */}
      <NonMemoChild value={count} />{' '}
      {/* Non-memoized child always re-renders if any other state change */}
    </div>
  );
}
