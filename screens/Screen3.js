import { Button, View, Text } from "react-native";

function Screen3({ navigation }) {
  return (
    <View>
      <Text> Tela 2</Text>
      <Button
        title="Ir para Tela 1"
        onPress={() => navigation.navigate("NOVA LEITURA")}
      />
    </View>
  );
}

export default Screen3;