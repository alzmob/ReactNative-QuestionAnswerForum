import * as React from 'react';
import { View, Image, ImageBackground, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';

import styles from '../styles';

import googleIcon from '../../images/googleIcon.png';
import facebookIcon from '../../images/facebookIcon.png';

class LoginButtonWithSocial extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onBtnPress() {
    if (this.props.onPress)
      this.props.onPress();
    else
      this.props.navigation.goBack();
  }

  render() {
    return (
      <TouchableOpacity style={styles.firstPage.loginButtonWithSocialStyle}
        >
        <Image source={this.props.icon == "google" ? googleIcon : facebookIcon} style={styles.firstPage.iconStyle}/>
        <Text style={styles.firstPage.buttonTextStyle}>{this.props.buttonName}</Text>
      </TouchableOpacity>
    );
  }
}

export default LoginButtonWithSocial;