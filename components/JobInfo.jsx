import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TabIconSymbol from "@/components/TabIconSymbol";


const JobInfo = ({ icon, text, colorScheme }) => {
  if (!text) return null;

  return (
    <View style={styles.row}>
      <TabIconSymbol
        name={icon}
        size={20}
        color={colorScheme === "dark" ? "rgb(152, 164, 192)" : "rgb(15, 15, 21)"}
      />
      <Text
        style={{
          color: colorScheme === "dark" ? "rgb(152, 164, 192)" : "rgb(77, 89, 89)",
          fontSize: 15,
          fontWeight: "400",
        }}
      >
        {" "}
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    width:"48%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 7,
  },
});

export default JobInfo;
