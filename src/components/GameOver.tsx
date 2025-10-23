import { useState } from "react";
import { Text, View } from "react-native";
import styles from "../styles/GameOver.styles";
import ConfettiEffect from "./ConfettiEffect";
import GameOverButtons from "./GameOverButtons";

interface GameOverProps {
  didWin: boolean;
  resetGame: () => void;
  id: number;
}

const GameOver = ({ didWin, resetGame, id }: GameOverProps) => {
  const [isConfettiActive, setIsConfettiActive] = useState(true);
  const nextLevelId = id + 1;

  const handlePlayAgain = () => {
    setIsConfettiActive(false);
    resetGame();
  };

  const handleNavigate = () => {
    setIsConfettiActive(false);
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <Text style={styles.winText}>{didWin ? "You Won!" : "You Lost"}</Text>
        <GameOverButtons
          onPlayAgain={handlePlayAgain}
          nextLevelId={nextLevelId}
          onNavigate={handleNavigate}
        />
      </View>
      <ConfettiEffect
        isActive={didWin && isConfettiActive}
        onStop={() => setIsConfettiActive(false)}
      />
    </View>
  );
};

export default GameOver;
