import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const ExpenseRow = ({ expense, onPress }) => {
  const { key, name, price, kind } = expense;
  return(
    <TouchableOpacity
      style={styles.item}
      onPress={() => { onPress(key)}}>
      <Text style={kind && { color: kind === 'incomming' ? '#22863a': '#d73a49' }}>Name: {name}</Text>
      <Text>Price: ${price}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    backgroundColor: "#eae8e8",
    padding: 10
  },
})

export default ExpenseRow;
