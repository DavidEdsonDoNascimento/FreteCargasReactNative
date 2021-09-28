/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Router from './routers/router';

const App: () => React$Node = () => {
  return (
    <Router />
    );
};


export default App;
