import { Text, View } from "react-native";
import styles from "../styles/GameOver.styles";

const WonScreen = () => {
  return (
    <View style={styles.overlay}>
      <Text style={styles.winText}>You Turtle 🐢</Text>
    </View>
  );
};
export default WonScreen;
