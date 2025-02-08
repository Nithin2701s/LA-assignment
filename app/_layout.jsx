import appStore  from "@/store";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, useColorScheme, SafeAreaView, Image, View } from "react-native";
import { Provider } from "react-redux";

const RootLayout = () => {
  const colorScheme = useColorScheme() ?? "light"; // Ensure a default value

  return (
    <Provider store={appStore}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <SafeAreaView
          style={{
            flex: 1,
            paddingTop: 25,
            backgroundColor: colorScheme === "dark" ? "#222" : "#fff",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              paddingLeft: 20,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/images/original.png")}
              style={{ height: 40, width: 40 }}
            />
            <Text
              style={{
                fontSize: 25,
                fontWeight: "700",
                marginLeft: 10,
                color: colorScheme === "dark" ? "#fff" : "#000",
              }}
            >
              Talentsync
            </Text>
          </View>

          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="jobdetails" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" options={{ title: "Page Not Found" }} />
          </Stack>
        </SafeAreaView>

        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      </ThemeProvider>
    </Provider>
  );
};

export default RootLayout;
