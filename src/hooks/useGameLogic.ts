import { useEffect, useState } from "react";
import { LevelConfig } from "../config/level";

const TOTAL_TILES = 9;
const getRandomTileIndex = () => Math.floor(Math.random() * TOTAL_TILES);

const startGame = (
  isGameOver: boolean,
  setActiveTileIndex: (value: number | null) => void,
  blinkDurationMs: number,
  intervalMs: number
) => {
  useEffect(() => {
    if (isGameOver) return;

    const interval = setInterval(() => {
      setActiveTileIndex(getRandomTileIndex());

      return setBlinkMs(setActiveTileIndex, blinkDurationMs);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [isGameOver, intervalMs, blinkDurationMs]);
};

const setBlinkMs = (
  setActiveTileIndex: (value: number | null) => void,
  blinkDurationMs: number
) => {
  const timeout = setTimeout(() => {
    setActiveTileIndex(null);
  }, blinkDurationMs);

  return () => clearTimeout(timeout);
};

const useGameLogic = (config: LevelConfig) => {
  const [activeTileIndex, setActiveTileIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [didWin, setDidWin] = useState(false);
  const [isCorrectTile, setIsCorrectTile] = useState(false);
  const [lastClickedIndex, setLastClickedIndex] = useState<number | null>(null);
  const {
    totalScore,
    interval: intervalMs,
    blinkDuration: blinkDurationMs,
    penalty,
  } = config;

  useEffect(() => {
    if (lastClickedIndex !== null) {
      const timer = setTimeout(() => {
        setLastClickedIndex(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [lastClickedIndex]);

  startGame(isGameOver, setActiveTileIndex, blinkDurationMs, intervalMs);

  const handleTilePress = (index: number) => {
    setLastClickedIndex(index);

    if (index === activeTileIndex) {
      const newScore = score + 1;
      if (newScore === totalScore) {
        setIsGameOver(true);
        setDidWin(true);
      }

      setScore(newScore);
      setActiveTileIndex(null);
      setIsCorrectTile(true);
    } else {
      if (penalty === "score") {
        if (score - 1 === -10) {
          setIsGameOver(true);
          setDidWin(false);
        }
        setScore((s) => (s > -10 ? s - 1 : 0));
      }
      if (penalty === "gameover") {
        setIsGameOver(true);
        setDidWin(false);
      }
      setIsCorrectTile(false);
    }
  };

  return {
    activeTileIndex,
    score,
    handleTilePress,
    isGameOver,
    didWin,
    total: totalScore,
    isCorrectTile,
    lastClickedIndex,
    resetGame: () => {
      setScore(0);
      setIsGameOver(false);
      setLastClickedIndex(null);
    },
  };
};

export default useGameLogic;
