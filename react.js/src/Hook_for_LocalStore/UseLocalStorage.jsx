import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  // Initialize the state with a function to retrieve data from localStorage.

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  // Define a function to update both state and localStorage.

  const setvalue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value; //handle functional update
      setStoredValue(valueToStore); //Update state
      window.localStorage.setItem(key, JSON.stringify(valueToStore)); // Update localStorage
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setvalue]; // Return the state and updater function.
}
