import React from "react";
import { Image, StyleSheet } from "react-native";


const JobImage = ({ imageUrl }) => {
  if (!imageUrl) return null;

  return <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="stretch"/>;
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height:400,
  },
});

export default JobImage;
