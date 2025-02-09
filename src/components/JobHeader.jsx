import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Bookmark from "@/components/Bookmark";

const JobHeader = ({ job, colorScheme, handleBookmark }) => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={[styles.title, { color: colorScheme === "dark" ? "#cff" : "#000" }]}>
          {job.job_role}
        </Text>
        <Text style={{ color: colorScheme === "dark" ? "#cff" : "#000" }}>{job.company_name}</Text>
      </View>
      <Bookmark jobId={job.id} handleBookmark={handleBookmark} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  title: { fontSize: 22, fontWeight: "bold" },
});

export default React.memo(JobHeader);
