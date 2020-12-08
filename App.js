import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const restartGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const gameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numRounds) => {
    setGuessRounds(numRounds);
  };

  let content = (
    <StartGameScreen title={"Game Start !"} onStartGame={gameHandler} />
  );

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOver
        numRounds={guessRounds}
        userNum={userNumber}
        onRestart={restartGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title={"Give me a Number"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
