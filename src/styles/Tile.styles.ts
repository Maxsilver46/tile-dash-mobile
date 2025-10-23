import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tile: {
    width: 100,
    height: 100,
    backgroundColor: "#35c7c2",
    borderRadius: 10,
    margin: 5,
  },
  litTile: {
    backgroundColor: "#ffdb4c",
    borderColor: "white",
    borderWidth: 3,
  },
  pressed: {
    opacity: 0.5,
  },
  correctTile: {
    backgroundColor: "lightgreen",
  },
  incorrectTile: {
    backgroundColor: "lightcoral",
  },
});

export default styles;
