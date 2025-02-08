import React from "react";
import { View, StyleSheet } from "react-native";
import JobInfo from "@/components/JobInfo";

const JobInfoSection = ({ job, colorScheme }) => {
  return (
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
  );
};

const styles = StyleSheet.create({
  infoContainer: { marginTop: 20, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
});

export default React.memo(JobInfoSection);
