import * as React from 'react';
import { View, Image, ImageBackground, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';

import styles from '../styles';

class LoginButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onBtnPress() {
    this.props.onPress();
  }

  render() {
    return (
      <TouchableOpacity style={styles.firstPage.loginButtonStyle}
        onPress = {this.onBtnPress.bind(this)}
        >
        <Text style={styles.firstPage.buttonTextStyle}>{this.props.buttonName}</Text>
      </TouchableOpacity>
    );
  }
}

export default LoginButton;