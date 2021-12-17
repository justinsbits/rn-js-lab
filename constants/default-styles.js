import { StyleSheet } from "react-native";

// an option (not used in this app) for minimizing redundant styling definition is a default style sheet as found here
// could use this instead of baking in defaults to styled components (e.g. BodyText, TitleText...)
export default StyleSheet.create({
  bodyText: {
    fontFamily: "open-sans",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});
