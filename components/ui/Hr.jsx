import { View, StyleSheet } from 'react-native';

const Hr = ({ color = '#ccc', width = '100%', thickness = 1, marginVertical = 10 }) => {
  return <View style={[styles.hr, { borderBottomColor: color, width, borderBottomWidth: thickness, marginVertical }]} />;
};

const styles = StyleSheet.create({
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
});

export default Hr;
