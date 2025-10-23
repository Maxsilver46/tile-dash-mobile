import { useLocalSearchParams } from "expo-router";
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
    activeTile,
    score,
    handleTilePress,
    isGameOver,
    totalScore,
    didWin,
    isCorrectTile,
    lastClicked,
    resetGame,
  } = useGameLogic(levelConfig);

  return (
    <View style={styles.container}>
      <ScoreCard
        score={score}
        total={totalScore}
        level={levelConfig.id}
        title={levelConfig.title}
      />
      <View style={styles.playGround}>
        <Grid
          activeTile={activeTile}
          handleTilePress={handleTilePress}
          isGameOver={isGameOver}
          isCorrectTile={isCorrectTile}
          lastClicked={lastClicked}
        />
      </View>
      {isGameOver && <GameOver didWin={didWin} resetGame={resetGame} />}
    </View>
  );
}
