import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onRestart }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.summaryArea}>
        <View style={styles.title}>
          <Text style={styles.titleText}>GAME OVER!</Text>
        </View>
        {/* <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View> */}
        <View>
          <Text style={styles.summaryText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess
            the number <Text style={styles.highlight}>{userNumber}</Text>.
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderwidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 24,
    color: "white",
  },
  highlight: {
    color: "yellow",
    fontFamily: "open-sans-bold",
  },
  title: {
    paddingBottom: 24,
  },
  titleText: {
    color: "yellow",
    fontSize: 36,
    fontFamily: "graduate-regular",
    textAlign: "center",
    paddingTop: 24,
  },
  summaryArea: {
    backgroundColor: Colors.primary800,
    padding: 14,
    marginBottom: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "black",
  },
  buttonContainer: {
    padding: 14,
  }
});
