import { useEffect, useState } from "react";

const TOTAL_TILES = 9;

const getRandomTileIndex = () => Math.floor(Math.random() * TOTAL_TILES);

export const useGameLogic = () => {
  const [activeTileIndex, setActiveTileIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (isGameOver) return;

    const interval = setInterval(() => {
      setActiveTileIndex(getRandomTileIndex());
    }, 1000);

    return () => clearInterval(interval);
  }, [isGameOver]);

  const handleTilePress = (index: number) => {
    if (index === activeTileIndex) {
      if (score + 1 === 10) setIsGameOver(true);

      setScore((s) => s + 1);
      setActiveTileIndex(null);
    } else {
      setScore((s) => (s > 0 ? s - 1 : 0));
    }
  };

  return { activeTileIndex, score, handleTilePress, isGameOver };
};
