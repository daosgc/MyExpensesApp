import React, { Component } from 'react';
import { Button, View } from 'react-native';

class AddExpenseScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to expense list"
          onPress={() => this.props.navigation.navigate('ExpenseScreen')}
          color="#19AC52"
        />
      </View>
    );
  }
}

export default AddExpenseScreen;