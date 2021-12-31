import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  const dummyFavMeals = MEALS.filter(
    (meal) => meal.id == "m1" || meal.id == "m2"
  );
  return <MealList listData={dummyFavMeals} navigation={props.navigation} />;
};

export const favoritesScreenOptions = {
  headerTitle: "Your Favorites",
};

export default FavoritesScreen;
