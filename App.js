/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { withAuthenticator } from 'aws-amplify-react-native';
import {Platform, StyleSheet, Text, View} from 'react-native';
//routes
import Routes from './src/utils/routes';


export default class App extends Component {
  render() {
    return (
     <Routes/>
    );
  }
}
