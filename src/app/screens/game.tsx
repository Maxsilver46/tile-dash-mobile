import { useLocalSearchParams } from "expo-router"; // Import this
import { View } from "react-native";
import GameOver from "../../components/GameOver";
import Grid from "../../components/Grid";
import ScoreCard from "../../components/ScoreCard";
import { LEVELS } from "../../config/level";
import useGameLogic from "../../hooks/useGameLogic";
import styles from "./game.styles";

export default function GameScreen() {
  const { levelId } = useLocalSearchParams();
  const levelConfig = LEVELS.find((l) => l.id === Number(levelId)) || LEVELS[0];
  const {
    activeTileIndex,
    score,
    handleTilePress,
    isGameOver,
    total,
    didWin,
    isCorrectTile,
    lastClickedIndex, // Add this
    resetGame,
  } = useGameLogic(levelConfig);

  return (
    <View style={styles.container}>
      <ScoreCard
        score={score}
        total={total}
        level={levelConfig.id}
        title={levelConfig.title}
      />
      <View style={styles.playGround}>
        <Grid
          activeTileIndex={activeTileIndex}
          handleTilePress={handleTilePress}
          isGameOver={isGameOver}
          isCorrectTile={isCorrectTile}
          lastClickedIndex={lastClickedIndex} // Add this
        />
      </View>
      {isGameOver && <GameOver didWin={didWin} resetGame={resetGame} />}
    </View>
  );
}
