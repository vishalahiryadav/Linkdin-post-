function throttle(func, delay) {
    let lastCall = 0;  // Track the last time the function was executed
  
    return function(...args) {
      const now = Date.now();
  
      // Only execute if enough time has passed since the last call
      if (now - lastCall >= delay) {
        lastCall = now;
        func(...args);  // Call the function
      }
    };
  }
  
  // Example usage: handle scroll event with throttling
  window.addEventListener('scroll', throttle(() => {
    console.log('Throttled scroll event');
  }, 200));  // Runs every 200ms, no matter how fast the user scrolls
  
  