import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

import SignUpForm from './components/SignUpForm';
import LogInForm from './components/LogInForm';
import API_KEYS from './utils/config_keys';

export default class App extends React.Component {

  componentDidMount() {

    firebase.initializeApp({
      apiKey: API_KEYS[0].apiKey,
      authDomain: API_KEYS[0].authDomain,
      databaseURL: API_KEYS[0].databaseURL,
      projectId: API_KEYS[0].projectId,
      storageBucket: API_KEYS[0].storageBucket,
      messagingSenderId: API_KEYS[0].messagingSenderId
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm/>
        <LogInForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
