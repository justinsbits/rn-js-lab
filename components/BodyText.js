import React from "react";
import { StyleSheet, Text } from "react-native";

const BodyText = (props) => {
  // spreading/merging to caller can still set other style properties related to Text component
  return (
    <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans",
  },
});

export default BodyText;
