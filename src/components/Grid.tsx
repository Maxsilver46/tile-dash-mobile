import { View } from "react-native";
import styles from "../styles/Grid.styles";
import Tile from "./Tile";

const TOTAL_TILES = 9;

interface GridProps {
  activeTile: number | null;
  handleTilePress: (index: number) => void;
  isGameOver: boolean;
  isCorrectTile: boolean;
  lastClicked: number | null;
}

const Grid = ({
  activeTile,
  handleTilePress,
  isGameOver,
  isCorrectTile,
  lastClicked,
}: GridProps) => {
  return (
    <View style={[styles.grid, isGameOver && styles.gridDisabled]}>
      {Array.from({ length: TOTAL_TILES }, (_, i) => (
        <Tile
          key={i}
          index={i}
          isLit={i === activeTile}
          onPress={() => handleTilePress(i)}
          isCorrectTile={isCorrectTile}
          lastClicked={lastClicked}
        />
      ))}
    </View>
  );
};

export default Grid;
