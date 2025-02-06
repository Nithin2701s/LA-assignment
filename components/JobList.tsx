import { StyleSheet, Text, View } from "react-native"
import JobCard from "./JobCard"


const JobList = ({joblist})=>{
    return (
       <View style={styles.list}>
         {joblist?.map((job,index)=>(
           <JobCard 
           key={job?.id + index}
           image={job?.creatives?.[0]?.thumb_url}
           title={job?.title} 
           location={job?.primary_details?.Place} 
           salary={job?.primary_details?.Salary}
           phone={job?.whatsapp_no} 
           />
         ))}
       </View>
    )
}
const styles = StyleSheet.create({
    list:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      gap:'20',
      padding:5  
    }
})
export default JobList