import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AddExpenseScreen, ExpenseScreen, ExpenseDetailScreen } from '../screens';

const AppNavigator = () => {
  const Stack = createStackNavigator();

  MyStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
            headerStyle: {
              backgroundColor: '#621FF7',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        initialRouteName="AddExpenseScreen"
        >
        <Stack.Screen
          name="AddExpenseScreen"
          component={AddExpenseScreen}
          options={{ title: 'Add Expense' }}
        />
        <Stack.Screen
          name="ExpenseScreen"
          component={ExpenseScreen}
          options={{ title: 'Expenses List' }}
        />
        <Stack.Screen
         name="ExpenseDetailScreen"
         component={ExpenseDetailScreen}
         options={{ title: 'Expense Detail' }}
        />
      </Stack.Navigator>
    );
  }

  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
};

export default AppNavigator;
