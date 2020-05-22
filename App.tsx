import * as React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from "react-redux";
import configureStore from './src/redux/store';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
