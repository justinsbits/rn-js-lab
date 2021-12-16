import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  Button,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoalsState, setCourseGoalsState] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoalsState((currentGoals) => [
      ...currentGoals,
      { anID: Math.random().toString(), value: goalTitle },
    ]);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoalsState((currentGoals) => {
      return currentGoals.filter((goal) => goal.anID !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <View>
        <GoalInput onAddGoal={addGoalHandler} />
        <FlatList
          keyExtractor={(item, index) => item.anID}
          data={courseGoalsState}
          renderItem={(itemData) => (
            <GoalItem
              id={itemData.item.anID}
              title={itemData.item.value}
              onDelete={removeGoalHandler}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
