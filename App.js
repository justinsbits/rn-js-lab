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

export default function App() {
  const [enteredGoalState, setEnteredGoalState] = useState("");
  const [courseGoalsState, setCourseGoalsState] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalState(enteredText);
  };
  const addGoalHandler = () => {
    // setCourseGoals([...courseGoalsState, enteredGoal]);
    setCourseGoalsState((currentGoals) => [...currentGoals, enteredGoalState]);
  };
  return (
    <View style={styles.screen}>
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Course Goal"
            style={styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoalState}
          />
          <Button title="Add" onPress={addGoalHandler} />
        </View>
        <ScrollView>
          {courseGoalsState.map((goal) => (
            <View key={goal} style={styles.listItem}>
              <Text>{goal}</Text>
            </View>
          ))}
        </ScrollView>
        {/* <FlatList
          data={courseGoalsState}
          renderItem={(itemData) => (
            <View style={styles.listItem}>
              <Text>{itemData.item}</Text>
            </View>
          )}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
