import { View } from "react-native";
import styles from "../styles/Grid.styles";
import Tile from "./Tile";

const TOTAL_TILES = 9;

interface GridProps {
  activeTileIndex: number | null;
  handleTilePress: (index: number) => void;
  isGameOver: boolean;
  isCorrectTile: boolean;
  lastClickedIndex: number | null; // Add this
}

const Grid = ({
  activeTileIndex,
  handleTilePress,
  isGameOver,
  isCorrectTile,
  lastClickedIndex,
}: GridProps) => {
  return (
    <View style={[styles.grid, isGameOver && styles.gridDisabled]}>
      {Array.from({ length: TOTAL_TILES }, (_, i) => (
        <Tile
          key={i}
          index={i}
          isLit={i === activeTileIndex}
          onPress={() => handleTilePress(i)}
          isCorrectTile={isCorrectTile}
          lastClickedIndex={lastClickedIndex}
        />
      ))}
    </View>
  );
};

export default Grid;
