import * as React from 'react';
import { View, Image, ImageBackground, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';

import styles from '../styles';

class BackButton extends React.Component {

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
      <TouchableOpacity style={styles.backBtnStyle}
        onPress = {this.onBtnPress.bind(this)}
        >
        <Text>back</Text>
      </TouchableOpacity>
    );
  }
}

export default BackButton;