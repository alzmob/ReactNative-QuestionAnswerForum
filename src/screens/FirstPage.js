import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LoginButton from '../components/loginButton';
import LoginButtonWithSocial from '../components/loginButtonWithSocial';

class FirstPage extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
        }
      }

    onPress() {
        this.props.navigation.navigate('LoginPage')
    }

    onPressSignup() {
        this.props.navigation.navigate('SignupPage')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize:70, fontWeight:'700', textAlign:'center', marginBottom:'80%'}}>Nouh</Text>

                <View style={styles.loginStyle}>
                    <LoginButton buttonName = "Log in" onPress = {this.onPress.bind(this)} />
                    <LoginButton buttonName = "Sign up" onPress = {this.onPressSignup.bind(this)} />
                </View>
                <LoginButtonWithSocial icon = "google" buttonName = "Sign up with google"/>
                <LoginButtonWithSocial icon = "facebook" buttonName = "Sign up with facebook"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        position : 'absolute',
        bottom : 10
    },
    loginStyle : {
        flexDirection:'row'
    }
});

export default FirstPage ;
