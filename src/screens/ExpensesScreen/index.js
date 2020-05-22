import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, View, FlatList } from 'react-native';
import firebase from '../../../firebase/firebaseConfig';
import ExpenseRow from './ExpenseRow';
import FloatIconButton from '../../components/FloatIconButton';

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

  onAddExpense = () => {
    this.props.navigation.navigate('AddExpenseScreen');
  }

  onEditExpense = (key) => {
    this.props.navigation.navigate('ExpenseDetailScreen', {
      expensekey: key
    });
  }

  render() {
    const { expenses, isLoading } = this.state;

    if(isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={expenses}
          keyExtractor={item => item.key}
          renderItem={({ item }) => {
            return (
              <ExpenseRow
                expense={item}
                onPress={this.onEditExpense}/>
            );
          }}
        />
        <FloatIconButton onPress={this.onAddExpense}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
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
