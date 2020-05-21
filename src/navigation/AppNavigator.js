import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerHeaderButton from './DrawerHeaderButton';

import { AddExpenseScreen, ExpenseScreen, ExpenseDetailScreen } from '../screens';

const AppNavigator = () => {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  MyDrawer = () => {
    return(
      <Drawer.Navigator>
        <Drawer.Screen name="List" component={() => {
          return <MyStackList initialRoute={"ExpenseScreen"}/>
        }}/>
        <Drawer.Screen name="Add Expense" component={() => {
          return <MyStackList initialRoute={"AddExpenseScreen"}/>
        }}/>
      </Drawer.Navigator>
    )
  }

  MyStackList = ({initialRoute}) => {
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
        initialRouteName={initialRoute || "ExpenseScreen"}
        >
        <Stack.Screen
          name="AddExpenseScreen"
          component={AddExpenseScreen}
          options={props =>{
            return {
              headerLeft: () => (
                <DrawerHeaderButton navigation={props.navigation}/>
              )
            }
          }}
        />
        <Stack.Screen
          name="ExpenseScreen"
          component={ExpenseScreen}
          options={props =>{
            return {
              headerLeft: () => (
                <DrawerHeaderButton navigation={props.navigation}/>
              )
            }
          }}
        />
        <Stack.Screen
          name="ExpenseDetailScreen"
          component={ExpenseDetailScreen}
          options={{
            title: 'Expense Detail'
          }}
        />
      </Stack.Navigator>
    );
  }

  return(
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  )
};

export default AppNavigator;
