import React from 'react';
import { View } from 'react-native';
import Card from '../components/Card';

const ScreenWithCards = () => {
  const cards = [
    {
      name: 'John Doe',
      birthdate: '01/01/1990',
      documentNumber: '123456789',
    },
    {
      name: 'Jane Doe',
      birthdate: '02/02/1992',
      documentNumber: '987654321',
    },
  ];

  return (
    <View>
      {cards.map((card, index) => (
        <Card
          key={index}
          name={card.name}
          birthdate={card.birthdate}
          documentNumber={card.documentNumber}
        />
      ))}
    </View>
  );
};

export default ScreenWithCards;
