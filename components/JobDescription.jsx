import React from "react";
import { View, Text, StyleSheet } from "react-native";


const JobDescription= ({ description, colorScheme }) => {
  return (
    <View>
      <Text style={[styles.sectionTitle, {  color: colorScheme ==='dark'? '#cff':'#000' }]}>
        Job Description
      </Text>
      <Text style={[styles.description, {  color: colorScheme ==='dark'? '#cff':'#000' }]}>
      {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: { fontSize: 18, fontWeight: "600", marginTop: 15 },
  description: { fontSize: 15, marginTop: 5, lineHeight: 22 },
});

export default JobDescription;
