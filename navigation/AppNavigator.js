import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import {
  MainMealsDrawerNavigator,
  AuthNavigator,
} from "../navigation/MealsNavigator";

import StartupScreen from "../screens/Startup";

const AppNavigator = (props) => {
  const isAuthenticated = useSelector((state) => !!state.auth.token);
  return (
    <NavigationContainer>
      {isAuthenticated && <MainMealsDrawerNavigator />}
      {!isAuthenticated && <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
