import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';

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
            containerStyle={styles.container}
            inputContainerStyle={styles.inputContainerStyle}
            placeholder="number"
            placeholderTextColor="black"
            label="Input Phone Number"
            inputStyle={{ color: 'black' }}
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
          title="Submit"
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    // flex: 1,
    // justifyContent: 'space-around',
    alignItems: 'center',
  },
  container: {


  },
  inputContainerStyle: {

  }
})