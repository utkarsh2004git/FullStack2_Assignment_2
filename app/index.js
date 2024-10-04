import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
export default function Page() {
  return (
    <View style={styles.container}>
        <View>
        <Link href={"/(tabs)/home"}>
          <Text style={styles.subtitle}>Go </Text>
        </Link>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    justifyContent:"center"
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
