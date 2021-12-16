import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Header;
