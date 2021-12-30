import { NavigationContainer } from "@react-navigation/native";
import { MealsNavigator } from "../navigation/MealsNavigator";

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <MealsNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
