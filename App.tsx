import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { AppStackNav, navigationTheme } from "./src/navs";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppProvider from "./src/contexts/appProvider";
import { StatusBar } from "expo-status-bar";

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppProvider>
        <NavigationContainer theme={navigationTheme}>
          <QueryClientProvider client={queryClient}>
            <AppStackNav />
          </QueryClientProvider>
        </NavigationContainer>
      </AppProvider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
