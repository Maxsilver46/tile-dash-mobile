import { Button, Text, View } from "react-native";
import styles from "../styles/GameOver.styles";

const GameOver = ({
  didWin,
  resetGame,
}: {
  didWin: boolean;
  resetGame: () => void;
}) => {
  return (
    <View style={styles.overlay}>
      <Text style={styles.winText}>{didWin ? "You Won" : "Game Over"}</Text>
      <Button title="Play again" onPress={resetGame} />
    </View>
  );
};
export default GameOver;
