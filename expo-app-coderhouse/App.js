import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";

import Navigator from "./src/navigation/Navigator";
import store from "@/store";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Mukta: require("./assets/font/Mukta/Mukta-Regular.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <View style={styles.container}>
          <Navigator />
        </View>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
});
