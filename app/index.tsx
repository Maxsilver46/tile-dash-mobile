import { Pressable, StyleSheet, Text, View } from "react-native";

const Tile = () => {
  return <View style={styles.tile}></View>;
};

const Grid = () => {
  return (
    <View style={styles.grid}>
      {Array.from({ length: 9 }, (_, i) => (
        <Tile key={i} />
      ))}
    </View>
  );
};

const onPressFunction = () => {
  // This will not work: styles are immutable.
  // To change the text color on press, use state in the component.

  // Example:
  // You can lift state to HomeScreen and pass a color prop to Text.
  // For now, here's a placeholder:
  // setTextColor("red");
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Grid />
      <Pressable onPress={onPressFunction}>
        <Text>I'm pressable!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tile: {
    width: 100,
    height: 100,
    backgroundColor: "#35c7c2ff",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 320,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
