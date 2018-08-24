import React from 'react';
import { View, StyleSheet, Dimensions, Keyboard, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';
const SCREEN_WIDTH = Dimensions.get('window').width;
const ROOT_URL = 'https://us-central1-one-time-password-udemy-adcc9.cloudfunctions.net'

export default class SingUpForm extends React.Component {

  state = {
    phone: ''
  };

  handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone })

      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone })
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View style={styles.containerStyle}>

          <View style={{ marginBottom: 10 }}>
            <Input
              value={this.state.phone}
              onChangeText={phone => this.setState({ phone })}
              containerStyle={styles.inputContainer}
              inputContainerStyle={styles.inputElementsContainer}
              placeholder="number"
              label="Enter Phone Number to Sign Up"
              inputStyle={{ color: 'black' }}
              onSubmitEditing={Keyboard.dismiss}
              keyboardType='phone-pad'
              leftIcon={
                <MaterialCommunityIcons
                  name='phone'
                  size={24}
                  color='black'
                />
              }
            />
          </View>

        <Button
          title="Submit to get Code"
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'space-around',
    // alignItems: 'center',
  },
  inputElementsContainer: {
    width: SCREEN_WIDTH * 0.75,
    marginVertical: 5,
  },
  inputContainer: {
    width: SCREEN_WIDTH * 0.8,
    marginVertical: 5,
  }
})