import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#000000d9",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  container: {
    width: "90%",
    height: "50%",
    borderRadius: 20,
    padding: 30,
    gap: 50,
    alignItems: "center",
  },
  winText: {
    flex: 1,
    fontSize: 110,
    lineHeight: 120,
    flexWrap: "wrap",
    fontWeight: "bold",
    color: "#ffffffff",
    textAlign: "center",
  },
});

export default styles;
