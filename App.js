import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.header}>
      <Header
        style={styles.headerTitle}
        title="Lets build another simple app"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "#f7287b",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
  },
});
