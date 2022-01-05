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
import FiltersScreen, { filtersScreenOptions } from "../screens/FiltersScreen";
import AuthScreen, { authScreenOptions } from "../screens/AuthScreen";

import Colors from "../constants/Colors";

// applied to all screens in navigator
// merged with navigator options as well as navigationOptions on component
// where default, is overriden by component navigationOptions, is overriden by above navigator/component specific (above)
const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans", //iOS
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
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

const mainDrawerContentOptions = {
  activeTintColor: Colors.accentColor,
  labelStyle: {
    fontFamily: "open-sans-bold",
  },
};

const mainDrawerFavoritesNavOptions = {
  drawerLabel: "Favorites",
};

const mainDrawerFiltersNavOptions = {
  drawerLabel: "Filters",
};

const MainMealsDrawerNav = createDrawerNavigator();
export const MainMealsDrawerNavigator = (props) => {
  return (
    <MainMealsDrawerNav.Navigator
      drawerContentOptions={mainDrawerContentOptions}
    >
      <MainMealsDrawerNav.Screen
        name="MealsFavs"
        component={MainBottomTabNavigator}
        options={mainDrawerFavoritesNavOptions}
      />
      <MainMealsDrawerNav.Screen
        name="MealsFilters"
        component={FiltersStackNavigator}
        options={mainDrawerFiltersNavOptions}
      />
    </MainMealsDrawerNav.Navigator>
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

const defaultMainBottomTabBarOptions = {
  labelStyle: {
    fontFamily: "open-sans",
  },
  activeTintColor: Colors.accentColor,
};

const mainBottomTabNavMealsOptions = {
  tabBarIcon: ({ focused, color, size }) => {
    return <Ionicons name="ios-restaurant" size={25} color={color} />;
  },
};

const mainBottomTabNavFavoritesOptions = {
  tabBarIcon: ({ focused, color, size }) => {
    return <Ionicons name="ios-star" size={25} color={color} />;
  },
};

const MainBottomTabNav = createBottomTabNavigator();
const MainBottomTabNavigator = (props) => {
  return (
    <MainBottomTabNav.Navigator tabBarOptions={defaultMainBottomTabBarOptions}>
      <MainBottomTabNav.Screen
        name="Meals"
        component={MealsStackNavigator}
        options={mainBottomTabNavMealsOptions}
      />
      <MainBottomTabNav.Screen
        name="Favorites"
        component={FavoritesStackNavigator}
        options={mainBottomTabNavFavoritesOptions}
      />
    </MainBottomTabNav.Navigator>
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

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
      <AuthStackNavigator.Screen
        name="Auth"
        component={AuthScreen}
        options={authScreenOptions}
      />
    </AuthStackNavigator.Navigator>
  );
};
