import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, TouchableOpacity, Text } from 'react-native';
import firebase from '../firebase/firebaseConfig';

class ExpenseScreen extends Component {
  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('Expenses');
    this.state = {
      isLoading: true,
      expenses: []
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const expenses = [];
    querySnapshot.forEach((res) => {
      const { name, price } = res.data();
      expenses.push({
        key: res.id,
        res,
        name,
        price,
      });
    });
    this.setState({
      expenses,
      isLoading: false,
   });
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
          {
            this.state.expenses.map((item, i) => {
              return (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => {
                    this.props.navigation.navigate('ExpenseDetailScreen', {
                      expensekey: item.key
                    });
                  }}>
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              );
            })
          }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 22
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
  item: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
})


export default ExpenseScreen;