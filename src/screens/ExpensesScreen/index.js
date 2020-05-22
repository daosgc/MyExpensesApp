import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, View, FlatList } from 'react-native';
import ExpenseRow from './ExpenseRow';
import FloatIconButton from '../../components/FloatIconButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ExpenseScreen extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      expenses: []
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  onAddExpense = () => {
    this.props.navigation.navigate('AddExpenseScreen');
  }

  onEditExpense = (key) => {
    this.props.navigation.navigate('ExpenseDetailScreen', {
      expensekey: key
    });
  }

  render() {
    const { isLoading } = this.state;
    const { expenses } = this.props;

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

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseScreen);
