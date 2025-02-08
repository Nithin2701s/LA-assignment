import { StyleSheet, View } from "react-native";
import JobCard from "./JobCard";


const JobList = ({ joblist }) => {
  return (
    <View style={styles.list}>
      {joblist?.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});

export default JobList;
