import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OfflineScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You are offline</Text>
      <Text style={styles.subText}>Check your internet connection.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8d7da",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#721c24",
  },
  subText: {
    fontSize: 16,
    color: "#721c24",
    marginTop: 5,
  },
});

export default OfflineScreen;
