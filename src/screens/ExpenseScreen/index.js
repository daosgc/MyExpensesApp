import React, { Component } from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import basicStyles from '../../styles/basicStyles';

class ExpenseDetailScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: '',
      isLoading: false
    };
  }

  componentDidMount() {}

  onChangeInputTex = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  updateExpenseDoc() {
    this.props.navigation.navigate('ExpenseScreen');
  }

  deleteExpenseDoc() {
    this.props.navigation.navigate('ExpenseScreen');
  }

  openConfirmAlert=()=>{
    Alert.alert(
      'Delete Expense',
      'Are you sure?',
      [
        {text: 'Yes', onPress: () => this.deleteExpenseDoc()},
        {text: 'No', onPress: () => console.log('No item was removed'), style: 'cancel'},
      ],
      {
        cancelable: true
      }
    );
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }
    return (
      <ScrollView style={basicStyles.container}>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Name'}
              value={this.state.name}
              onChangeText={(val) => this.onChangeInputTex(val, 'name')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Price'}
              value={this.state.price}
              onChangeText={(val) => this.onChangeInputTex(val, 'price')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Update'
            onPress={() => this.updateExpenseDoc()}
            color="#19AC52"
          />
          </View>
         <View>
          <Button
            title='Delete'
            onPress={this.openConfirmAlert}
            color="#E37399"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginBottom: 7,
  }
})

export default ExpenseDetailScreen;
