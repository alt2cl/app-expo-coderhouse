import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";

import Navigator from "./src/navigation/Navigator";
import store from "@/store";

import { initSQLiteDB } from "@/persistence/index";

(async () => {
  try {
    const response = await initSQLiteDB();
    console.log({ responseCreatingDB: response });
    console.log("Base de datos Inicilizado");
  } catch (error) {
    console.log({ errorCreatingDB: error });
  }
})();

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
        <View className="bg-slate-400 flex-1">
          <Navigator />
        </View>
      </Provider>
    </>
  );
}
