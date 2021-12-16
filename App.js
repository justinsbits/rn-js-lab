import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoalsState, setCourseGoalsState] = useState([]);
  const [isAddModeState, setIsAddModeState] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoalsState((currentGoals) => [
      ...currentGoals,
      { anID: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddModeState(false);
  };

  const removeGoalHandler = (goalId) => {
    // note, react will batch the state changes below and then rerender
    // i.e. not re-rendering after each
    setCourseGoalsState((currentGoals) => {
      return currentGoals.filter((goal) => goal.anID !== goalId);
    });
  };

  const cancelGoalAddHandler = () => {
    setIsAddModeState(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddModeState(true)} />
      <GoalInput
        visible={isAddModeState}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAddHandler}
      />
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
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
