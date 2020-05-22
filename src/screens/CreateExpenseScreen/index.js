import React, { Component } from 'react';
import { StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import basicStyles from '../../styles/basicStyles';
import { Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addExpense } from '../../redux/actions/expensesActions';

class AddExpenseScreen extends Component {
  constructor() {
    super();
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
    const { name, price } = this.state;
    const newExpense = {
      key: Math.floor(Math.random() * 1000),
      name,
      price
    };
    this.props.addExpense(newExpense);
    this.props.navigation.navigate('ExpenseScreen');
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

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addExpense
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseScreen);
