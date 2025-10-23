import { useState } from "react";
import { LevelConfig } from "../config/level";

const useScoreSystem = (config: LevelConfig) => {
  const { totalScore, penalty, lowestScore } = config;
  const [score, setScore] = useState(0);
  const [didWin, setDidWin] = useState(false);
  const [didLose, setDidLose] = useState(false);

  const handleResult = (correct: boolean) => {
    if (didWin || didLose) return;

    if (correct) {
      const newScore = score + 1;
      setScore(newScore);

      if (newScore >= totalScore) setDidWin(true);
    } else {
      if (penalty === "score") {
        const newScore = score - 1;
        setScore(newScore);

        if (newScore <= lowestScore) setDidLose(true);
      }
      if (penalty === "gameover") {
        setDidLose(true);
      }
    }
  };

  const resetScore = () => {
    setScore(0);
    setDidWin(false);
    setDidLose(false);
  };

  return { score, didWin, didLose, handleResult, resetScore };
};

export default useScoreSystem;
