import { View } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

const Shimmer = () => (
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

export default Shimmer  