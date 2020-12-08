import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    marginVertical: 10,
    borderRadius: 50,
    width: 90,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 35,
    color: Colors.accent,
  },
});

export default NumberContainer;
