import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";

import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={3000}
          // set to local image...
          // by default, for a locally loaded image you don't have to set a default width/height since derived from image (albeit may not all show if bigger than app)
          source={require("../assets/success.png")}
          // set to network image...
          // images from network, always need to set width/height - no default
          //source={{
          //  uri: "https://cdn.pixabay.com/photo/2015/10/28/16/47/cup-1010916_960_720.jpg",
          //}}
          style={styles.image}
          resizeMode="cover" // default, but showing options for supplying resize guidance when image frame and dimensions don't match
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>.
        </BodyText>
      </View>

      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden", // so any image overflow doesn't show
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 25,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
