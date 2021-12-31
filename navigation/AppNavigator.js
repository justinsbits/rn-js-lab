import { NavigationContainer } from "@react-navigation/native";
import { MainMealsDrawerNavigator } from "../navigation/MealsNavigator";

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <MainMealsDrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
