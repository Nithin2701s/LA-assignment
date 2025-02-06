import JobList from '@/components/JobList';
import { useJobs } from '@/hooks/useJobs';
import { FlatList, Text, useColorScheme, View } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

const Index = () => {
  const { joblist, loading, getJobs, page } = useJobs();
  const colorScheme = useColorScheme();

  const renderShimmer = () => (
    <View style={{ padding: 20 }}>
      {[...Array(3)].map((_, index) => (
        <View key={`shimmer-group-${index}`}>
          <ShimmerPlaceholder 
            key={`shimmer-main-${index}`}  
            style={{ margin: 'auto', height: 160, marginVertical: 10, borderRadius: 10, width: '90%' }} 
          />
          <ShimmerPlaceholder 
            key={`shimmer-sub-${index}`}  
            style={{ margin: 'auto', height: 20, marginVertical: 10, borderRadius: 10, width: '90%' }} 
          />
          <View style={{ display: 'flex', flexDirection: "row" }}>
            <ShimmerPlaceholder 
              key={`shimmer-left-${index}`}  
              style={{ margin: 'auto', height: 20, marginVertical: 10, borderRadius: 10, width: '40%' }} 
            />
            <ShimmerPlaceholder 
              key={`shimmer-right-${index}`}  
              style={{ margin: 'auto', height: 20, marginVertical: 10, borderRadius: 10, width: '40%' }} 
            />
          </View>
        </View>
      ))}
    </View>
  );
  

  return (
    <FlatList
      data={joblist}
      keyExtractor={(item, index) => item?.id ? `job-${item.id}` : `job-fallback-${index}`}
      renderItem={({ item }) => <JobList joblist={[item]} />}
      ListHeaderComponent={<Text style={{ fontSize: 20, fontWeight: '700', padding: 5, marginLeft: 20 }}>Jobs</Text>}
      contentContainerStyle={{ paddingVertical: 20, backgroundColor: colorScheme === 'light' ? '#fff' : '#111' }}
      onEndReached={() => getJobs(page)}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading ? renderShimmer() : null}
    />
  );
};

export default Index;
