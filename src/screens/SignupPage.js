import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Input } from 'native-base';

import BackButton from '../components/backButton';
import styles from '../styles';

const {deviceWidth, deviceHeight} = Dimensions.get("window");

class SignupPage extends Component<Props> {

    onPress () {
        this.props.navigation.goBack()
    }

    clickSignupBtn() {
        this.props.navigation.navigate('InterestedCategoryPage')
    }


    render() {
        return (
            <Container>
                <Header>
                    <BackButton onPress = {this.onPress.bind(this)} />
                </Header>
                <Content style={{}}>
                    <View style={styless.containerStyle}>
                        <Text style={{fontSize:70, fontWeight:'700', textAlign:'center', }}>Nouh</Text>

                        <Text style={styles.loginPage.textStyle}>Full name :</Text>
                        <View style={styless.container}>
                            <Input style={styles.loginPage.inputStyle} />
                        </View>

                        <Text style={styles.loginPage.textStyle}>Email address : </Text>
                        <View style={styless.container}>
                            <Input style={styles.loginPage.inputStyle} />
                        </View>

                        <Text style={styles.loginPage.textStyle}>Password : </Text>
                        <View style={styless.container}>
                            <Input style={styles.loginPage.inputStyle} />
                        </View>

                        <Text style={styles.loginPage.textStyle}>Confirm password : </Text>
                        <View style={styless.container}>
                            <Input style={styles.loginPage.inputStyle} />
                        </View>

                        <Text style={styles.loginPage.textStyle}>Location : </Text>
                        <View style={styless.container}>
                            <Input style={styles.loginPage.inputStyle} />
                        </View>

                        <TouchableOpacity style={{borderColor:'black', borderWidth:1,  alignSelf:'center', alignItems:'center', justifyContent:'center', marginTop:20, backgroundColor: 'rgba(0,0,0,0.1)', padding:10, paddingLeft:50, paddingRight:50}} onPress={this.clickSignupBtn.bind(this)}>
                            <Text>Sign up</Text>
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
        justifyContent : 'space-between',

    },
});

export default SignupPage;
