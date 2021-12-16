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

  const addGoalHandler = goalTitle => {
    setCourseGoalsState((currentGoals) => [
      ...currentGoals,
      { anID: Math.random().toString(), value: goalTitle },
    ]);
  };

  return (
    <View style={styles.screen}>
      <View>
        <GoalInput onAddGoal={addGoalHandler} />
        {/* <ScrollView>
          {courseGoalsState.map((goal) => (
            <View key={goal} style={styles.listItem}>
              <Text>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          keyExtractor={(item, index) => item.anID}
          data={courseGoalsState}
          renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
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
