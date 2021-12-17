import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  // example of 'props forwarding' where caller can now send in all props that would be available on TextInput natively and that will get 'forwarded' to TextInput
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
