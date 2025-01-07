const debounce = (fn, delay) => {
    let timeoutId; // Variable to store the timeout reference
    return function (...args) { // Return a new function
        clearTimeout(timeoutId); // Clear any previously set timeout
        timeoutId = setTimeout(() => {
            fn(...args); // Call the original function with arguments after delay
        }, delay);
    };
};

// Define the log function
const log = (message) => {
    console.log(message);
};

// Create a debounced version of the log function
const debouncedLog = debounce(log, 3000);

// Call the debounced function
debouncedLog("Hello"); // Logs "Hello" after 3 seconds
