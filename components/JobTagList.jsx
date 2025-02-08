import { Text, View } from "react-native"

const JobTags = ({tags,colorScheme}) => {
  return (
    <View style={{ marginTop: 15}}>
          <Text style={{ fontSize: 18, fontWeight: "600", color: colorScheme ==='dark'? '#cff':'#000' }}>
            Job Tags
          </Text>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10}}>
     {tags?.map((tag,index)=>(
       <View key={index} style={{padding:5,margin:5,backgroundColor:tag.bg_color,elevation:.5,borderRadius:5}}>
         <Text style={{color:tag.text_color,fontSize:18,fontWeight:600}}>{tag.value}</Text> 
      </View>
     ))}
    </View>
     </View>
  )
}

export default JobTags
