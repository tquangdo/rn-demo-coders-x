import axios from 'axios';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';
import { BASE_URL } from './common/constants';

const AppContainer = createAppContainer(AppNavigator)
axios.defaults.baseURL = BASE_URL

export default function App() {
  return <AppContainer />
}
