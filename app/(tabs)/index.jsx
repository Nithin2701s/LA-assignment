import React from 'react';
import JobList from '@/components/JobList';
import { useJobs } from '@/hooks/useJobs';
import { FlatList, Text, View, useColorScheme } from 'react-native';
import Shimmer from '@/components/Shimmer';
import { useNetInfo } from '@react-native-community/netinfo';

const Index = () => {
  const { joblist, loading, getJobs, page } = useJobs();
  const colorScheme = useColorScheme();
  const netInfo = useNetInfo(); // Get network status

  // Show offline message if there's no internet
  if (!netInfo.isConnected) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colorScheme === 'light' ? '#fff' : '#111' }}>
        <Text style={{ fontSize: 18, fontWeight: '700', color: 'red' }}>You are offline</Text>
        <Text style={{ fontSize: 14, color: 'gray' }}>Check your internet connection</Text>
      </View>
    );
  }

  if (joblist.length === 0) return null;

  return (
    <FlatList
      data={joblist}
      keyExtractor={(item, index) => item?.id ? `job-${item.id}` : `job-fallback-${index}`}
      renderItem={({ item }) => <JobList joblist={[item]} />}
      ListHeaderComponent={<Text style={{ fontSize: 20, fontWeight: 700, padding: 5, marginLeft: 20,color:colorScheme === "dark" ? "#fff" : "#000" }}>Jobs</Text>}
      contentContainerStyle={{ paddingVertical: 20, backgroundColor: colorScheme === 'light' ? '#fff' : '#111' }}
      onEndReached={() => getJobs(page)}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading ? <Shimmer /> : null}
    />
  );
};

export default Index;
