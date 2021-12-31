import React, { useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import AppNavigator from "./navigation/AppNavigator";
import mealsReducer from "./store/reducers/meals";

enableScreens(); // improved perf for larger apps -  configure react-navigation to use screens instead of plain RN Views for rendering screen views

// supports merging various reducers
const rootReducer = combineReducers({
  meals: mealsReducer,
});
const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.error(err)}
      />
    );
  }

  // wrap all components interacting with store with provider
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
