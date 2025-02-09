import { HapticTab } from "@/components/HapticTab"
import TabIconSymbol from "@/components/TabIconSymbol"
import { Colors } from "@/constants/Colors"
import { Tabs } from "expo-router"
import { Platform, useColorScheme, View } from "react-native"


const TabLayout = ()=>{
    const colorScheme = useColorScheme()
    return (
        <Tabs
        screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarStyle: Platform.select({
                  ios: {
                    // Use a transparent background on iOS to show the blur effect
                    position: 'absolute',
                  },
                  default: {},
                }),
              }}
              >
           <Tabs.Screen name="index" 
           options={{
            title:'Home',
            tabBarIcon : ({color}) => <TabIconSymbol name="home" color={color} size={20} />
           }} />
           <Tabs.Screen name="Bookmarks"
           options={{
            title:'Bookmarks',
            tabBarIcon :({color})=> <TabIconSymbol name="bookmarks" color={color} size={20} />
           }}
             />
        </Tabs>
    )
}
export default TabLayout