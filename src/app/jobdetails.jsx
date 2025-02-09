import React, { useCallback } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { useColorScheme } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { toggleBookmark } from "@/store/jobSlice";

import JobImage from "@/components/JobImage";
import JobHeader from "@/components/JobHeader";
import JobInfoSection from "@/components/JobInfoSection";
import JobDescription from "@/components/JobDescription";
import JobTagList from "@/components/JobTagList";
import JobActions from "@/components/JobActions";
import Hr from "@/components/ui/Hr";
import AdditionalInfo from "@/components/AdditionalInfo";

const JobDetails = () => {
  const route = useRoute();
  const { job } = route.params;
  const colorScheme = useColorScheme() || "light";
  const dispatch = useDispatch();

  const handleBookmark = useCallback(() => {
    dispatch(toggleBookmark(job));
  }, [dispatch, job]);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colorScheme === "light" ? "#fff" : "#111" }]}>
      <View style={styles.detailsContainer}>
        <JobImage imageUrl={job.creatives?.[0]?.thumb_url} />

        <JobHeader job={job} colorScheme={colorScheme} handleBookmark={handleBookmark} />

        <JobInfoSection job={job} colorScheme={colorScheme} />

        <Hr />
        <JobDescription description={job.title} colorScheme={colorScheme} />
        <AdditionalInfo content={typeof job?.content === "string" ? JSON.parse(job.content) : job?.content} colorScheme={colorScheme} />
        <Hr />

        <JobTagList tags={job?.job_tags} colorScheme={colorScheme} />

        <JobActions job={job} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  detailsContainer: { padding: 15 },
});

export default JobDetails;
