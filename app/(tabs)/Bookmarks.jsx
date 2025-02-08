import JobList from "@/components/JobList";
import { ScrollView, Text, useColorScheme, View } from "react-native";
import { useSelector } from "react-redux";
import BookmarkSvg from '@/assets/images/bookmark.svg';

const Bookmarks = () => {
  const bookmarks = useSelector((state) => state.job.bookmarkedJobs);
  const colorScheme = useColorScheme();
  const textColor = colorScheme === "dark" ? "#fff" : "#111";
  const bgColor = colorScheme === "dark" ? "#111" : "#fff";

  return bookmarks.length === 0 ? (
    <View style={{ alignItems: "center", paddingTop: 70,height:"100%", backgroundColor: bgColor  }}>
      <BookmarkSvg width={250} height={250} />
      <Text style={{ fontSize: 25, fontWeight: "700", color: textColor,marginVertical:20 }}>
        No Bookmarks
      </Text>
    </View>
  ) : (
    <ScrollView style={{ backgroundColor: bgColor }}>
      <Text style={{ fontSize: 20, fontWeight: "700", padding: 5, marginLeft: 20, marginTop: 20 }}>
        My Bookmarks
      </Text>
      <JobList joblist={bookmarks} />
    </ScrollView>
  );
};

export default Bookmarks;
