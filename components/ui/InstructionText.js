import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "graduate-regular",
    color: Colors.accent500,
    fontSize: 24,
    marginTop: 14,
  },
});
