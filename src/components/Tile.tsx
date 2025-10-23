import React from "react";
import { Pressable, View } from "react-native";
import styles from "../styles/Tile.styles";

interface TileProps {
  isLit: boolean;
  onPress: () => void;
  isCorrectTile: boolean;
  index: number; // Add this
  lastClickedIndex: number | null; // Add this
}

const Tile: React.FC<TileProps> = ({
  isLit,
  onPress,
  isCorrectTile,
  index,
  lastClickedIndex,
}) => {
  const showFeedback = lastClickedIndex === index;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.tile,
        isLit && styles.litTile,
        pressed && styles.pressed,
        showFeedback &&
          (isCorrectTile ? styles.correctTile : styles.incorrectTile),
      ]}
    >
      <View />
    </Pressable>
  );
};

export default Tile;
