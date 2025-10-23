import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    gap: 40,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  buttonIcon: {
    fontSize: 55,
    color: "#fff",
    textShadowColor: "rgba(155, 155, 155)",
    textShadowOffset: { width: 1, height: 4 },
    textShadowRadius: 2,
  },
});

export default styles;
