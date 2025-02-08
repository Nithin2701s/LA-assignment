import React from "react";
import { Text, View, StyleSheet } from "react-native";

const AdditionalInfo = ({ content, colorScheme }) => {
  if (!content) return null; 

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: colorScheme === "dark" ? "#cff" : "#000" }]}>
        {content?.block1}
      </Text>
      <Text style={[styles.text, { color: colorScheme === "dark" ? "#cff" : "#000" }]}>
        {content?.block2}
      </Text>
      <Text style={[styles.text, { color: colorScheme === "dark" ? "#cff" : "#000" }]}>
        {content?.block3}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default React.memo(AdditionalInfo);
