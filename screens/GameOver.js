import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import GameScreen from "./GameScreen";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is over</Text>
      <Text>Number of rounds : {props.numRounds}</Text>
      <Text>Number was : {props.userNum}</Text>
      <Button title="START AGAIN !" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOver;
