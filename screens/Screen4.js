import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";

function DataEntryScreen() {
  const [dataList, setDataList] = useState([]);

  function handleSaveData() {
    const newData = {
      name: nameInput,
      age: ageInput,
      email: emailInput,
      phone: phoneInput,
    };
    setDataList([...dataList, newData]);
    console.log(newData.name.value);
  }

  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={nameInput}
        onChangeText={setNameInput}
      />
      <TextInput
        placeholder="Age"
        value={ageInput}
        onChangeText={setAgeInput}
      />
      <TextInput
        placeholder="Email"
        value={emailInput}
        onChangeText={setEmailInput}
      />
      <TextInput
        placeholder="Phone"
        value={phoneInput}
        onChangeText={setPhoneInput}
      />
      <Button title="Save" onPress={handleSaveData} />
    </View>
  );
}

export default DataEntryScreen;