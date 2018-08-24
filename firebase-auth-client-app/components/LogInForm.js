import React from 'react';
import { View, StyleSheet, Text, Dimensions, Keyboard, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import firebase from 'firebase';
const SCREEN_WIDTH = Dimensions.get('window').width;

const ROOT_URL = 'https://us-central1-one-time-password-udemy-adcc9.cloudfunctions.net'

export default class LogInForm extends React.Component {

  state = {
    phone: '',
    code: '',
    message: ''
  };

  handleSubmit = async () => {
    try {
      let response = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phone: this.state.phone, code: this.state.code });
      firebase.auth().signInWithCustomToken(response.data.token);
      this.setState({ message: "Success, the code has been verified!" })
      // await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone })
    } catch (err) {
      this.setState({ message: "Something went wrong :(" })
      console.log(err)
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

        <View style={styles.container}>

          <View >
            <Input
              label="Enter Phone Number to Log In"
              placeholder="number"
              value={this.state.phone}
              onChangeText={phone => this.setState({ phone })}
              containerStyle={styles.inputElementsContainer}
              onSubmitEditing={Keyboard.dismiss}
              containerStyle={styles.inputContainer}
              keyboardType='phone-pad'

              leftIcon={
                <MaterialCommunityIcons
                  name='phone'
                  size={24}
                  color='black'
                />}

            />
          </View>

          <View >
            <Input
              label="Enter Code"
              placeholder="code"
              value={this.state.code}
              containerStyle={styles.inputElementsContainer}
              onChangeText={code => this.setState({ code })}
              onSubmitEditing={Keyboard.dismiss}
              containerStyle={styles.inputContainer}
              leftIcon={
                <MaterialIcons
                  name='sms'
                  size={24}
                  color='black'
                />}
            />
          </View>

          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{this.state.message}</Text>
          </View>

          <Button
            title="Submit to verify code"
            onPress={this.handleSubmit}
          />

        </View>
      </KeyboardAvoidingView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputElementsContainer: {
    width: SCREEN_WIDTH * 0.75,
    marginVertical: 5,
  },
  messageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageText: {
    fontSize: 16,
    color: 'red'
  }, 
  inputContainer: {
    width: SCREEN_WIDTH * 0.8,
    marginVertical: 5,
  }
})