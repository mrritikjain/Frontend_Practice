import { useState, useEffect } from "react";

export const UseDebounce = (value, delay) => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return {debounce, setDebounce};
};
