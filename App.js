import axios from 'axios';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';

const AppContainer = createAppContainer(AppNavigator)
axios.defaults.baseURL = 'http://2f04-58-159-16-244.ngrok.io'

export default function App() {
  return <AppContainer />
}
