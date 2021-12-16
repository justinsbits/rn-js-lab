import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = (props) => {
  const [enteredGoalState, setEnteredGoalState] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalState(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoalState}
      />
      <Button
        title="Add"
        onPress={props.onAddGoal.bind(this, enteredGoalState)}
        // onPress={() => props.onAddGoal.bind(tenteredGoalState)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default GoalInput;
