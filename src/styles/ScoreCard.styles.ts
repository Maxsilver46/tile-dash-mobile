import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#34495e",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  scoreText: {
    fontSize: 24,
    textAlign: "center",
  },
  scoreValue: {
    color: "#2ecc71",
    fontWeight: "700",
  },
  scoreDelimiter: {
    color: "#95a5a6",
    fontWeight: "400",
  },
  totalValue: {
    color: "#7f8c8d",
    fontWeight: "600",
  },
});

export default styles;
