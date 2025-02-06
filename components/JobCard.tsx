import { Image, StyleSheet, Text, View } from "react-native";

const JobCard = ({ title, location, salary, phone,image,}) => {
  return (
    <View style={styles.card}>
       <View>
        <Image source={{ uri: image }}
          style={styles.image}
          resizeMode="stretch" />
        </View> 
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
        <Text style = {styles.primaryDetails}>{location}</Text>
      <View style={{ display: "flex",flexDirection:'row', justifyContent:'space-between'}}>
        <Text style = {styles.primaryDetails}>Salary : {salary}</Text>
        <Text style = {styles.primaryDetails}>Phone : {phone}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    gap:5
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 5,
    marginBottom: 5,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    width: "90%",
},
primaryDetails:{
      fontSize: 13,
      color:'gray'
  },
});
export default JobCard;
