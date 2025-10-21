import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function LandingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Tile Dash</Text>
      <Link href="/game" push asChild>
        <Button title="Start Game" />
      </Link>
    </View>
  );
}
