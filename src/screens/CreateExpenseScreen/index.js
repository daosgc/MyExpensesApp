import React, { Component } from 'react';
import { StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import firebase from '../../../firebase/firebaseConfig';
import basicStyles from '../../styles/basicStyles';
import { Button, Text } from 'native-base';

class AddExpenseScreen extends Component {
  constructor() {
    super();
    this.fireStoreRef = firebase.firestore().collection('Expenses');
    this.state = {
      name: '',
      price: '',
      isLoading: false
    };
  }

  onChangeInputTex = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  saveExpense() {
    if(this.state.name === '' && this.state.price === ''){
     alert('please insert all values!')
    } else {
      this.setState({
        isLoading: true,
      });
      this.fireStoreRef.add({
        name: this.state.name,
        price: this.state.price
      }).then((res) => {
        this.setState({
          name: '',
          price: '',
          isLoading: false
        });
        this.props.navigation.navigate('ExpenseScreen')
      })
      .catch((err) => {
        console.error("Error found: ", err);
        this.setState({
          isLoading: false,
        });
      });
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    } else {
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
        <Button block
          style={styles.button}
          onPress={() => this.saveExpense()}>
          <Text style={{color: "#ffff"}}>Add Expense</Text>
        </Button>
      </ScrollView>
      );
    }
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
    backgroundColor: '#621FF7'
  }
})

export default AddExpenseScreen;
