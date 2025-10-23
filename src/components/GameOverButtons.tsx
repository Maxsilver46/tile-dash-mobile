import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";
import styles from "../styles/GameOverButtons.styles";

interface GameOverButtonsProps {
  onPlayAgain: () => void;
  nextLevelId: number;
  onNavigate?: () => void;
}

const GameOverButtons = ({
  onPlayAgain,
  nextLevelId,
  onNavigate,
}: GameOverButtonsProps) => {
  return (
    <View style={styles.buttonContainer}>
      <Link href="/" asChild>
        <Pressable style={styles.button} onPress={onNavigate}>
          <Ionicons name="home" style={styles.buttonIcon} />
        </Pressable>
      </Link>

      <Pressable style={styles.button} onPress={onPlayAgain}>
        <Ionicons name="refresh" style={styles.buttonIcon} />
      </Pressable>

      <Link
        href={{
          pathname: "/screens/game",
          params: { levelId: nextLevelId },
        }}
        asChild
      >
        <Pressable style={styles.button} onPress={onNavigate}>
          <Ionicons name="play-forward" style={styles.buttonIcon} />
        </Pressable>
      </Link>
    </View>
  );
};

export default GameOverButtons;
