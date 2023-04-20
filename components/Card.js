import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ name, birthdate, documentNumber,country }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>Name: {name}</Text>
      <Text style={styles.cardText}>Birthdate: {birthdate}</Text>
      <Text style={styles.cardText}>Document Number: {documentNumber}</Text>
      <Text style={styles.cardText}>Country: {country}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
  },
  cardText: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default Card;