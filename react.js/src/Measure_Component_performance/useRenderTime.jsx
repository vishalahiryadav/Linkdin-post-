import { useEffect } from 'react';

export default function useRenderTime() {
  useEffect(() => {
    const start = performance.now(); //Measure render start time.
    return () => {
      const end = performance.now(); //Measure render end time.
      console.log(`Render time:${end - start} ms`);
    };
  }, []); // you can also do without dependancy[] , to run on every render.
}
