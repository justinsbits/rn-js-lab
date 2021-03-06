import { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Switch } from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import { setFilters } from "../store/actions/meals";

// NOTE: 
// current implementation
// - filters not applied to 'favorites' only the standard meals list
// - filters must be saved via the 'disk' icon to take effect

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""} // default ('') - white for iOS
        value={props.state}
        onValueChange={props.onStateChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  // useCallback to cache representation of state, only recreated when state changes
  // so the state object (appliedFilters) returned by saveFilters only recreated where a 'dependency' changes
  // in the case below, dependencies (noted in dependency array) are the state changes that would result in a difference in appliedFilters
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  // any time state changes...
  // communicate between component and navigation item via props.navigation.setOptions
  // in the case below, if saveFilters changes then ensure to apply the related side effect via saveFilters
  useEffect(() => {
    props.navigation.setOptions({
      headerRight: (navData) => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Save" iconName="ios-save" onPress={saveFilters} />
        </HeaderButtons>
      ),
    });
  }, [saveFilters]); // since 'saveFilters' is cached via useCallback, it will only 'trigger' execution when recreated

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-Free"
        state={isGlutenFree}
        onStateChange={setIsGlutenFree}
      />
      <FilterSwitch
        label="Lactose-Free"
        state={isLactoseFree}
        onStateChange={setIsLactoseFree}
      />
      <FilterSwitch label="Vegan" state={isVegan} onStateChange={setIsVegan} />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onStateChange={setIsVegetarian}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
});

export const filtersScreenOptions = (navData) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FiltersScreen;
