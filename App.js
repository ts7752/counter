import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [cnt, SetCnt] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.assa}>
        Open up App.js to start working on your app!
      </Text>
      <Text style={styles.cnt}>{cnt}</Text>
      <Button title="더하기" onPress={() => SetCnt(cnt + 15)}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  assa: {
    color: "#f00000",
    fontSize: 20,
  },
  cnt: {
    fontSize: 50,
    marginTop: 20,
  },
});
