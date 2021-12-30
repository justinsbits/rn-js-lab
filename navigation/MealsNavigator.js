import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import CategoriesScreen, {
  categoriesScreenOptions,
} from "../screens/CategoriesScreen";
import CategoryMealsScreen, {
  categoryMealsScreenOptions,
} from "../screens/CategoryMealsScreen";
import MealDetailScreen, {
  mealDetailScreenOptions,
} from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";

// applied to all screens in navigator
// merged with navigator options as well as navigationOptions on component
// where default, is overriden by component navigationOptions, is overriden by above navigator/component specific (above)
const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const MealsStackNavigator = createStackNavigator();
export const MealsNavigator = (props) => {
  return (
    <MealsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <MealsStackNavigator.Screen
        name="Categories"
        component={CategoriesScreen}
        options={categoriesScreenOptions}
      />
      <MealsStackNavigator.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={categoryMealsScreenOptions}
      />
      <MealsStackNavigator.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={mealDetailScreenOptions}
      />
    </MealsStackNavigator.Navigator>
  );
};

