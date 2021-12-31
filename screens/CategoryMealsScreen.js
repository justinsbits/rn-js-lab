import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealScreen = (props) => {
  const catId = props.route.params.categoryId;
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

// can be static (see CategoriesScreen) or via func that returns dynamic options
export const categoryMealsScreenOptions = (navigationData) => {
  const catId = navigationData.route.params.categoryId;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealScreen;
