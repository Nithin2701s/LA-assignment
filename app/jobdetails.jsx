import React, { useCallback } from "react";
import { View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity } from "react-native";
import { useColorScheme } from "react-native";
import { useRoute } from "@react-navigation/native";
import JobImage from "@/components/JobImage";
import JobInfo from "@/components/JobInfo";
import JobTagList from "@/components/JobTagList";
import Hr from "@/components/ui/Hr";
import JobDescription from "@/components/JobDescription";
import { useDispatch } from "react-redux";
import { toggleBookmark } from "@/store/jobSlice";
import Bookmark from "@/components/Bookmark";
import { FontAwesome } from "@expo/vector-icons";

const JobDetails = () => {
  const route = useRoute();
  const { job } = route.params;
  const colorScheme = useColorScheme() || "light";
  const dispatch = useDispatch();
  const handleBookmark = useCallback(() => {
    dispatch(toggleBookmark(job)); // Toggle bookmark state in Redux
  }, [dispatch, job]);
  
  const handleJoinWhatsApp = () => {
    if (job?.contact_preference?.whatsapp_link) {
      Linking.openURL(job.contact_preference.whatsapp_link);
    }
  };

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: colorScheme === "light" ? "#fff" : "#111" },
      ]}
      contentContainerStyle={{ flexGrow: 1 }} 
    >
      <View style={{ flex: 1, paddingBottom: 20 }}>  
        <JobImage imageUrl={job.creatives?.[0]?.thumb_url} />

        <View style={styles.detailsContainer}>
          <View style={styles.header}>
            <View>
              <Text
                style={[styles.title, { color: colorScheme ==='dark'? '#cff':'#000' }]}
              >
                {job.job_role}
              </Text>
              <Text style={{  color: colorScheme ==='dark'? '#cff':'#000' }}>
                {job.company_name}
              </Text>
            </View>
            <View style={styles.bookmarkContainer}>
              <Bookmark jobId={job.id} handleBookmark={handleBookmark} />
            </View>
          </View>

          <View style={styles.infoContainer}>
            <JobInfo icon="place" text={job.primary_details?.Place} colorScheme={colorScheme} />
            <JobInfo 
              icon="attach-money" 
              text={job.primary_details?.Salary === "-" ? "Not mentioned" : job.primary_details?.Salary} 
              colorScheme={colorScheme} 
            />
            <JobInfo 
              icon="business-center" 
              text={job.primary_details?.Experience || "Not mentioned"} 
              colorScheme={colorScheme} 
            />
            <JobInfo icon="call" text={job.whatsapp_no} colorScheme={colorScheme} />
            <JobInfo icon="group" text={`${job.openings_count} openings`} colorScheme={colorScheme} />
          </View>

          <Hr />
          <JobDescription description={job.title} colorScheme={colorScheme} />
          <JobTagList tags={job?.job_tags} />

          {job?.contact_preference?.whatsapp_link && (
            <TouchableOpacity style={styles.whatsappButton} onPress={handleJoinWhatsApp}>
              <FontAwesome name="whatsapp" size={20} color="#fff" />
              <Text style={styles.whatsappButtonText}>Join WhatsApp Group</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  detailsContainer: { padding: 15 },
  title: { fontSize: 22, fontWeight: "bold" },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  bookmarkContainer: { width: "18%", marginTop: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-around" },
  infoContainer: { marginTop: 20, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
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

export default JobDetails;
