import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import AppNavigator from "./navigation/AppNavigator";
import mealsReducer from "./store/reducers/meals";
import authReducer from "./store/reducers/auth";

enableScreens(); // improved perf for larger apps -  configure react-navigation to use screens instead of plain RN Views for rendering screen views

// supports merging various reducers
const rootReducer = combineReducers({
  meals: mealsReducer,
  auth: authReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

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
