import { Text, View } from "react-native";
import styles from "../styles/ScoreCard.styles";

const ScoreCard = ({
  score,
  total,
  level,
  title,
}: {
  score: number;
  total: number;
  level: number;
  title: string;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Level {level} : {title}
      </Text>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>
          <Text style={styles.scoreValue}>{score}</Text>
          <Text style={styles.scoreDelimiter}> / </Text>
          <Text style={styles.totalValue}>{total}</Text>
        </Text>
      </View>
    </View>
  );
};

export default ScoreCard;
