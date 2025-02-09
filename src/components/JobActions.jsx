import React from "react";
import { TouchableOpacity, Text, StyleSheet, Linking } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const JobActions = ({ job }) => {
  const handleJoinWhatsApp = () => {
    if (job?.contact_preference?.whatsapp_link) {
      Linking.openURL(job.contact_preference.whatsapp_link);
    }
  };

  if (!job?.contact_preference?.whatsapp_link) return null;

  return (
    <TouchableOpacity style={styles.whatsappButton} onPress={handleJoinWhatsApp}>
      <FontAwesome name="whatsapp" size={20} color="#fff" />
      <Text style={styles.whatsappButtonText}>Join WhatsApp Group</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  whatsappButton: {
    flexDirection: "row",
    backgroundColor: "#25D366",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    alignSelf: "center",
    width: "90%",
  },
  whatsappButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default React.memo(JobActions);
