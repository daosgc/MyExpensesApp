import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import firebase from '../firebase/firebaseConfig';

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
        <ScrollView style={styles.container}>
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
            title='Add Expense'
            onPress={() => this.saveExpense()} 
            color="#19AC52"
          />
        </View>
      </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
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
  }
})

export default AddExpenseScreen;