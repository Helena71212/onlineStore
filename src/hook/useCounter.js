import { useCallback, useState } from "react";

export const useCounter = (value) => {
  const [count, setCount] = useState(value);

  const handleIncrement = useCallback(() => {
    setCount((state) => state + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((state) => {
      return state > 0 ? state - 1 : state;
    });
  }, []);

  const handleReset = useCallback(() => setCount(value), []);

  return { count, handleIncrement, handleDecrement, handleReset };
};