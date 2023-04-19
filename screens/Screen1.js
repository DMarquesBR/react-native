import * as React from "react";
import { Button, View, Text } from "react-native";
import { useState } from "react";

function Screen1({ navigation }) {
  const [count, setCount] = useState(0);

  function handlerPress() {
    setCount(count + 1);
  }

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Somar" onPress={handlerPress} />
      <Button></Button>
    </View>
  );
}

export default Screen1;
