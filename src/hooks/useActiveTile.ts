import { useEffect, useState } from "react";

const TOTAL_TILES = 9;
const getRandomTile = () => Math.floor(Math.random() * TOTAL_TILES);

const useActiveTile = (
  isRunning: boolean,
  interval: number,
  blinkDuration: number
) => {
  const [activeTile, setActiveTile] = useState<number | null>(null);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      const tile = getRandomTile();
      setActiveTile(tile);

      const timeoutId = setTimeout(() => setActiveTile(null), blinkDuration);

      return () => clearTimeout(timeoutId);
    }, interval);

    return () => clearInterval(intervalId);
  }, [isRunning, interval, blinkDuration]);

  return activeTile;
};

export default useActiveTile;
