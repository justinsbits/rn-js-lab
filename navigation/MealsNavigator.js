import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
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
import FavoritesScreen, {
  favoritesScreenOptions,
} from "../screens/FavoritesScreen";

import FiltersScreen from "../screens/FiltersScreen"; //favoritesScreenOptions,

import Colors from "../constants/Colors";

// applied to all screens in navigator
// merged with navigator options as well as navigationOptions on component
// where default, is overriden by component navigationOptions, is overriden by above navigator/component specific (above)
const defaultStackNavOptions = {
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

const MealsBottomTabNav = createBottomTabNavigator();
const MealsBottomTabNavigator = (props) => {
  return (
    <MealsBottomTabNav.Navigator tabBarOptions={defaultTabBarOptions}>
      <MealsBottomTabNav.Screen
        name="Meals"
        component={MealsStackNavigator}
        options={mealTabNavIcons}
      />
      <MealsBottomTabNav.Screen
        name="Favorites"
        component={FavoritesStackNavigator}
        options={favTabNavIcons}
      />
    </MealsBottomTabNav.Navigator>
  );
};

const MealsStackNav = createStackNavigator();
const MealsStackNavigator = (props) => {
  return (
    <MealsStackNav.Navigator screenOptions={defaultStackNavOptions}>
      <MealsStackNav.Screen
        name="Categories"
        component={CategoriesScreen}
        options={categoriesScreenOptions}
      />
      <MealsStackNav.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={categoryMealsScreenOptions}
      />
      <MealsStackNav.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={mealDetailScreenOptions}
      />
    </MealsStackNav.Navigator>
  );
};

const FavoritesStackNav = createStackNavigator();
const FavoritesStackNavigator = (props) => {
  return (
    <FavoritesStackNav.Navigator screenOptions={defaultStackNavOptions}>
      <FavoritesStackNav.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={favoritesScreenOptions}
      />
      <FavoritesStackNav.Screen
        name="MealDetail"
        component={MealDetailScreen}
      />
    </FavoritesStackNav.Navigator>
  );
};

const FiltersStackNav = createStackNavigator();
const FiltersStackNavigator = (props) => {
  return (
    <FiltersStackNav.Navigator screenOptions={defaultStackNavOptions}>
      <FiltersStackNav.Screen
        name="Filters"
        component={FiltersScreen}
        options={filtersScreenOptions}
      />
    </FiltersStackNav.Navigator>
  );
};

const MainNav = createDrawerNavigator();
export const MainNavigator = (props) => {
  return (
    <MainNav.Navigator>
      <MainNav.Screen name="MealsFavs" component={MealsBottomTabNavigator} />
      <MainNav.Screen name="Filters" component={FiltersStackNavigator} />
    </MainNav.Navigator>
  );
};
