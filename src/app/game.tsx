// src/app/game.tsx (The final, clean version)
import { Text, View } from "react-native";
import Tile from "./components/Tile";
import styles from "./game.styles";
import { useGameLogic } from "./hooks/useGameLogic";

export default function GameScreen() {
  const { activeTileIndex, score, handleTilePress, isGameOver } =
    useGameLogic();
  const TOTAL_TILES = 9;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.scoreText}>Score: {score} / 10</Text>
      </View>

      <View style={styles.gameArea}>
        <View style={[styles.grid, isGameOver && styles.gridDisabled]}>
          {Array.from({ length: TOTAL_TILES }, (_, i) => (
            <Tile
              key={i}
              isLit={i === activeTileIndex}
              onPress={() => handleTilePress(i)}
            />
          ))}
        </View>
      </View>
      {isGameOver && (
        <View style={styles.overlay}>
          <Text style={styles.winText}>You Won</Text>
        </View>
      )}
    </View>
  );
}
