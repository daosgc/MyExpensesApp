import React, { Component } from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import firebase from '../firebase/firebaseConfig';

class ExpenseDetailScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: '',
      isLoading: false
    };
  }

  componentDidMount() {
    const dbRef = firebase.firestore().collection('Expenses').doc(this.props.route.params.expensekey)
    dbRef.get().then((res) => {
      if (res.exists) {
        const expense = res.data();
        this.setState({
          key: res.id,
          name: expense.name,
          price: expense.price,
          isLoading: false
        });
      } else {
        console.log("Document does not exist!");
      }
    });
  }

  onChangeInputTex = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  updateExpenseDoc() {
    this.setState({
      isLoading: true,
    });
    const updateDBRef = firebase.firestore().collection('Expenses').doc(this.state.key);
    updateDBRef.set({
      name: this.state.name,
      price: this.state.price,
    }).then((docRef) => {
      this.setState({
        key: '',
        name: '',
        price: '',
        isLoading: false,
      });
      this.props.navigation.navigate('ExpenseScreen');
    })
    .catch((error) => {
      console.error("Error: ", error);
      this.setState({
        isLoading: false,
      });
    });
  }

  deleteExpenseDoc() {
    const dbRef = firebase.firestore().collection('Expenses').doc(this.props.route.params.expensekey)
      dbRef.delete().then((res) => {
          console.log('Item removed from database')
          this.props.navigation.navigate('ExpenseScreen');
      })
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
  },
  button: {
    marginBottom: 7,
  }
})

export default ExpenseDetailScreen;