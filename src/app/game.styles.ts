import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff3d4ff",
    height: "100%",
    width: "100%",
    paddingTop: 60,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
  },
  scoreText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  gameArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 330,
    justifyContent: "center",
  },
  gridDisabled: {
    opacity: 0.5,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  winText: {
    fontSize: 120,
    flexWrap: "wrap",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});

export default styles;
