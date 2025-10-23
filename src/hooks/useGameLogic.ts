import { useEffect, useState } from "react";
import { LevelConfig } from "../config/level";
import useActiveTile from "./useActiveTile";
import useGameStatus from "./useGameStatus";
import useScoreSystem from "./useScoreSystem";

const useGameLogic = (config: LevelConfig) => {
  const [lastClicked, setLastClicked] = useState<number | null>(null);
  const { totalScore, interval, blinkDuration } = config;
  const { isRunning, start, stop, reset: resetStatus } = useGameStatus();
  const [isCorrectTile, setIsCorrectTile] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const activeTile = useActiveTile(isRunning, interval, blinkDuration);
  const { score, didWin, didLose, handleResult, resetScore } =
    useScoreSystem(config);

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    if (didWin || didLose) {
      stop();
      setIsGameOver(true);
    }
  }, [didWin, didLose, stop]);

  useEffect(() => {
    if (lastClicked === null) return;

    const timer = setTimeout(() => setLastClicked(null), 300);
    return () => clearTimeout(timer);
  }, [lastClicked]);

  const handleTilePress = (index: number) => {
    if (!isRunning) return;

    setLastClicked(index);
    const correct = index === activeTile;
    setIsCorrectTile(correct);
    handleResult(correct);
  };

  const resetGame = () => {
    resetStatus();
    resetScore();
    setLastClicked(null);
    setIsCorrectTile(false);
    setIsGameOver(false);
    start();
  };

  return {
    activeTile,
    score,
    handleTilePress,
    isGameOver,
    totalScore,
    didWin,
    isCorrectTile,
    lastClicked,
    resetGame,
  };
};

export default useGameLogic;
