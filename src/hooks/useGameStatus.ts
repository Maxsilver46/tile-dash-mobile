import { useState } from "react";

const useGameStatus = () => {
  const [isRunning, setIsRunning] = useState(false);

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => setIsRunning(false);

  return { isRunning, start, stop, reset };
};

export default useGameStatus;
