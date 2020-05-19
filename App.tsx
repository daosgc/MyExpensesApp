import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddExpenseScreen from './screens/AddExpenseScreen';
import ExpenseScreen from './screens/ExpenseScreen';
import ExpenseDetailScreen from './screens/ExpenseDetailScreen';

const Stack = createStackNavigator();

function MyStack() {
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

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}