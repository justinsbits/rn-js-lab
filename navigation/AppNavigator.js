import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "../navigation/MealsNavigator";

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
