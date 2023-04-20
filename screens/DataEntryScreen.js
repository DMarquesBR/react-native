import React, { useContext, useState } from "react";
import { View, Button, TextInput, Text } from "react-native";
import TravellersListProvider from "../store/context/Travellers";

function DataEntryScreen() {
  const [dataList, setDataList] = useState([]);
  const TravellersListContext = useContext(TravListContext);

  function handleSaveData() {
    const newData = {
      name: nameInput,
      birthdate: birthdateInput,
      documentNumber: documentNumberInput,
      country: countryInput,
    };
    TravellersListContext.addTraveller(newData);
  }

  const [nameInput, setNameInput] = useState("");
  const [birthdateInput, setBirthdateInput] = useState("");
  const [documentNumberInput, setDocumentNumberInput] = useState("");
  const [countryInput, setCountryInput] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={nameInput}
        onChangeText={setNameInput}
      />
      <TextInput
        placeholder="Birthdate"
        value={birthdateInput}
        onChangeText={setBirthdateInput}
      />
      <TextInput
        placeholder="Document Number"
        value={documentNumberInput}
        onChangeText={setDocumentNumberInput}
      />
      <TextInput
        placeholder="Country"
        value={countryInput}
        onChangeText={setCountryInput}
      />
      <Button title="Save" onPress={handleSaveData} />
      <Text>
        {dataList.map((data) => data.name)} length: {dataList.length}
      </Text>
    </View>
  );
}

export default DataEntryScreen;
