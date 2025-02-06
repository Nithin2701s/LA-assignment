import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, useColorScheme, View } from 'react-native'

const RootLayout = () => {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark'? DarkTheme:DefaultTheme} >
       <View style={{height:35}}>
       </View>
     <Stack>
      <Stack.Screen name='(tabs)' options={{headerShown:false}}  />
      <Stack.Screen name='+not-found' />
     </Stack>
     <StatusBar style="auto" />
    </ThemeProvider>
  )
}

export default RootLayout