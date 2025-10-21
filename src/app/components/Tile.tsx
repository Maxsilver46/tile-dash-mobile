// src/components/Tile.tsx
import React from "react";
import { Pressable, View } from "react-native";
import styles from "./Tile.styles";

// Define the shape of props the Tile will accept
interface TileProps {
  isLit: boolean; // Tells the tile whether it should be "blinking"
  onPress: () => void; // Function to call when the player presses it
}

const Tile: React.FC<TileProps> = ({ isLit, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.tile,
        isLit && styles.litTile, // Apply lit style if isLit is true
        pressed && styles.pressed, // Optional feedback for a press
      ]}
    >
      <View />
    </Pressable>
  );
};

export default Tile;
