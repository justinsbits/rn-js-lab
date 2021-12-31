import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen, {
  categoriesScreenOptions,
} from "../screens/CategoriesScreen";
import CategoryMealsScreen, {
  categoryMealsScreenOptions,
} from "../screens/CategoryMealsScreen";
import MealDetailScreen, {
  mealDetailScreenOptions,
} from "../screens/MealDetailScreen";

import FavoritesScreen from "../screens/FavoritesScreen";

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

const defaultTabBarOptions = {
  activeTintColor: Colors.accentColor,
};

const mealTabNavIcons = {
  tabBarIcon: ({ focused, color, size }) => {
    return <Ionicons name="ios-restaurant" size={25} color={color} />;
  },
};

const favTabNavIcons = {
  tabBarIcon: ({ focused, color, size }) => {
    return <Ionicons name="ios-star" size={25} color={color} />;
  },
};

const MealsStackNavigator = createStackNavigator();
const MealsFavTabNavigator = createBottomTabNavigator();
export const MealsNavigator = (props) => {
  return (
    <MealsFavTabNavigator.Navigator tabBarOptions={defaultTabBarOptions}>
      <MealsFavTabNavigator.Screen
        name="Meals"
        component={MealsStackNavigatorContainer}
        options={mealTabNavIcons}
      />
      <MealsFavTabNavigator.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={favTabNavIcons}
      />
    </MealsFavTabNavigator.Navigator>
  );
};

const MealsStackNavigatorContainer = (props) => {
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
