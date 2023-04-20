import React, { useContext } from 'react';
import { View } from 'react-native';
import Card from '../components/Card';
import TravellersListProvider, { TravListContext } from '../store/context/Travellers';

const ScreenWithCards = () => {
    const TravellersListContext = useContext(TravListContext);

    const Traveller = TravListContext.travellers;
    
  return (
    <View>
      {Traveller.map((card, index) => (
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
