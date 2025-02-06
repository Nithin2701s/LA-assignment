import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useColorScheme } from "react-native";
import TabIconSymbol from "./TabIconSymbol";
import { useState } from "react";

interface JobCardProps {
  id: string;
  title: string;
  location: string;
  salary: string;
  phone: string;
  image: string;
}

const JobCard: React.FC<JobCardProps> = ({ id, title, location, salary, phone, image }) => {
  const colorScheme = useColorScheme();
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colorScheme === "dark" ? "#333" : "#fff",
          shadowColor: colorScheme === "dark" ? "#fff" : "#000",
        },
      ]}
    >
      <View>
        <Image source={{ uri: image }} style={styles.image} resizeMode="stretch" />
      </View>
      <View
        style={[
          styles.overlayContainer,
          { backgroundColor: colorScheme === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)" },
        ]}
      >
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "90%" }}>
            <Text style={[styles.title, { color: colorScheme === "dark" ? "#fff" : "#000" }]} numberOfLines={2}>
              {title}
            </Text>
            <Text style={[styles.primaryDetails, { color: colorScheme === "dark" ? "#bbb" : "gray" }]}>{location}</Text>
          </View>
          <Pressable onPress={handleBookmark}>
            <TabIconSymbol name={bookmarked ? "bookmark" : "bookmark-outline"} size={25} color={bookmarked ? "#000" : "gray"} />
          </Pressable>
        </View>
        <View style={styles.detailsRow}>
          <Text style={[styles.primaryDetails, { color: colorScheme === "dark" ? "#bbb" : "gray" }]}>
            Salary: {salary !== "-" ? salary : "Not mentioned"}
          </Text>
          <Text style={[styles.primaryDetails, { color: colorScheme === "dark" ? "#bbb" : "gray" }]}>Phone: {phone}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    gap: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 5,
    marginBottom: 5,
  },
  overlayContainer: {
    zIndex: 10,
    width: "100%",
    padding: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    width: "90%",
  },
  primaryDetails: {
    fontSize: 13,
    padding: 2,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default JobCard;
