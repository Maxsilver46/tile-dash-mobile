import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function LandingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Tile Dash</Text>
      <Link
        href={{ pathname: "/screens/game", params: { levelId: 1 } }}
        asChild
      >
        <Button title="Level 1" />
      </Link>
      <Link
        href={{ pathname: "/screens/game", params: { levelId: 2 } }}
        asChild
      >
        <Button title="Level 2" />
      </Link>
      <Link
        href={{ pathname: "/screens/game", params: { levelId: 3 } }}
        asChild
      >
        <Button title="Level 3" />
      </Link>
    </View>
  );
}
