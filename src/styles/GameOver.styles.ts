import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
