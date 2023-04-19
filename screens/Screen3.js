import React from 'react';
import { View, Text } from 'react-native';

function Screen3({ route }) {
  const savedData = route.params?.savedData || [];

  return (
    <View>
      <Text>Saved Data:</Text>
      {savedData.map((data, index) => (
        <View key={index}>
          <Text>Box 1: {data.box1}</Text>
          <Text>Box 2: {data.box2}</Text>
          <Text>Box 3: {data.box3}</Text>
          <Text>Box 4: {data.box4}</Text>
        </View>
      ))}
    </View>
  );
}

export default Screen3;