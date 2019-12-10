import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Input } from 'native-base';

import BackButton from '../components/backButton';
import styles from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {deviceWidth, deviceHeight} = Dimensions.get("window");

class LoginPage extends Component<Props> {

    onPress () {
        this.props.navigation.goBack()
    }

    clickLoginBtn() {
        this.props.navigation.navigate('HomePage')
    }


    render() {
        return (
            <Container>
                <Header>
                    <BackButton onPress = {this.onPress.bind(this)} />
                </Header>

                <Content>
                    <View style={styless.containerStyle}>
                        <Text style={{fontSize:70, fontWeight:'700', textAlign:'center', }}>Nouh</Text>

                        <Text style={[styles.loginPage.textStyle, {marginTop:'50%'}]}>Username :</Text>
                        <View style={styless.container}>
                            <Input style={styles.loginPage.inputStyle} />
                        </View>

                        <Text style={styles.loginPage.textStyle}>Password : </Text>
                        <View style={styless.container}>
                            <Input style={styles.loginPage.inputStyle} />
                        </View>

                        <TouchableOpacity style={{width:'95%', alignSelf:'center', marginBottom:'20%'}}>
                            <Text style={{textAlign:'right'}}>Forgot password?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{borderColor:'black', borderWidth:1,  alignSelf:'center', alignItems:'center', justifyContent:'center', padding:10, paddingLeft:50, paddingRight:50, backgroundColor: 'rgba(0,0,0,0.1)'}} onPress={this.clickLoginBtn.bind(this)}>
                            <Text>Log in</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styless = StyleSheet.create({
    containerStyle: {
        flex:1,
        justifyContent: 'center',
        alignSelf: 'center',
        width:'80%',
        marginTop:'30%'
    },
    container: {
        flexDirection : 'row',
        alignItems:'center',
        width: '95%',
        alignSelf:'center',

    },
});

export default LoginPage;
