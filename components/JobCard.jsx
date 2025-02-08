import React, { useCallback, memo } from "react";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useColorScheme } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TabIconSymbol from "./TabIconSymbol";
import JobInfo from "@/components/JobInfo";
import { useDispatch } from "react-redux";
import { toggleBookmark } from "@/store/jobSlice";
import useBookMark from '@/hooks/useBookMark'
import Bookmark from '@/components/Bookmark'

const JobCard = ({ job }) => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const bookmarked = useBookMark(job.id); // Get bookmark state from Redux directly

  const handleBookmark = useCallback(() => {
    dispatch(toggleBookmark(job)); // Toggle bookmark state in Redux
  }, [dispatch, job]);

  const handleNav = () => {
    navigation.navigate("jobdetails", { job });
  };

  const colors = {
    background: colorScheme === "dark" ? "#333" : "#fff",
    shadow: colorScheme === "dark" ? "#fff" : "#000",
    text: colorScheme === "dark" ? "#fff" : "#000",
    subText: colorScheme === "dark" ? "#bbb" : "#111",
    overlay: colorScheme === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)",
  };

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: colors.background, shadowColor: colors.shadow },
      ]}
    >
      <Pressable
        onPress={handleNav}
        style={[styles.overlayContainer, { backgroundColor: colors.overlay }]}
      >
        <View style={styles.headerRow}>
          <View style={styles.titleContainer}>
            <Text style={[styles.title, { color: colors.text }]} numberOfLines={2}>
              {job?.job_role}
            </Text>
          </View>
          <Bookmark jobId={job.id} handleBookmark={handleBookmark} />
        </View>

        <View style={styles.detailsRow}>
          <JobInfo icon="place" text={job?.primary_details?.Place} colorScheme={colorScheme} />
          <JobInfo
            icon="attach-money"
            text={job?.primary_details?.Salary !== "-" ? job?.primary_details?.Salary : "Not mentioned"}
            colorScheme={colorScheme}
          />
          {job?.whatsapp_no && (
            <JobInfo icon="call" text={job?.whatsapp_no} colorScheme={colorScheme} />
          )}
        </View>
      </Pressable>
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
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  overlayContainer: {
    zIndex: 10,
    width: "100%",
    padding: 10,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: {
    width: "85%",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  detailsRow: {
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default memo(JobCard);