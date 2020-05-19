import React, { Component } from 'react';
import { Button, View } from 'react-native';

class ExpenseScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Expenses List"
          onPress={() => this.props.navigation.navigate('ExpenseDetailScreen')}
          color="#19AC52"
        />
    </View>
    );
  }
}

export default ExpenseScreen;