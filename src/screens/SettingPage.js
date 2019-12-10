import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Input } from 'native-base';

import BackButton from '../components/backButton';
import styles from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {deviceWidth, deviceHeight} = Dimensions.get("window");

class SettingPage extends Component<Props> {

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
                  <Left>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                      <Icon name="arrow-round-back" />
                    </TouchableOpacity>
                  </Left>
                  <Body>
                    <Text style={{fontSize:18}}>Settings</Text>
                  </Body>
                  <Right>
                  </Right>
                </Header>

                <Content>
                  <View style={{backgroundColor:'rgba(0,0,0,0.1)', padding:10, margin:10}}>
                    <Text style={{fontSize:18, fontWeight:'500'}}>Account</Text>
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', margin:5}}>
                      <Text style={{marginLeft:50, fontSize:17, fontStyle:'italic'}}>Edit Profile</Text>
                      <Icon name="arrow-forward" style={{fontSize:20}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', margin:5}}>
                      <Text style={{marginLeft:50, fontSize:17, fontStyle:'italic'}}>Change Password</Text>
                      <Icon name="arrow-forward" style={{fontSize:20}} />
                    </TouchableOpacity>
                  </View>

                  <View style={{backgroundColor:'rgba(0,0,0,0.1)', padding:10, margin:10, marginTop:0}}>
                    <Text style={{fontSize:18, fontWeight:'500'}}>Settings</Text>
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', margin:5}}>
                      <Text style={{marginLeft:50, fontSize:17, fontStyle:'italic'}}>language</Text>
                      <Icon name="arrow-forward" style={{fontSize:20}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', margin:5}}>
                      <Text style={{marginLeft:50, fontSize:17, fontStyle:'italic'}}>Push Notification</Text>
                      <Icon name="arrow-forward" style={{fontSize:20}} />
                    </TouchableOpacity>
                  </View>

                  <View style={{backgroundColor:'rgba(0,0,0,0.1)', padding:10, margin:10, marginTop:0}}>
                    <Text style={{fontSize:18, fontWeight:'500'}}>Support</Text>
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', margin:5}}>
                      <Text style={{marginLeft:50, fontSize:17, fontStyle:'italic'}}>Help Center</Text>
                      <Icon name="arrow-forward" style={{fontSize:20}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', margin:5}}>
                      <Text style={{marginLeft:50, fontSize:17, fontStyle:'italic'}}>Report a Problem</Text>
                      <Icon name="arrow-forward" style={{fontSize:20}} />
                    </TouchableOpacity>
                  </View>

                  <View style={{backgroundColor:'rgba(0,0,0,0.1)', padding:10, margin:10, marginTop:0}}>
                    <Text style={{fontSize:18, fontWeight:'500'}}>About</Text>
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', margin:5}}>
                      <Text style={{marginLeft:50, fontSize:17, fontStyle:'italic'}}>Privacy Policy</Text>
                      <Icon name="arrow-forward" style={{fontSize:20}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', margin:5}}>
                      <Text style={{marginLeft:50, fontSize:17, fontStyle:'italic'}}>Terms</Text>
                      <Icon name="arrow-forward" style={{fontSize:20}} />
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity style={{margin:20}}>
                    <Text style={{color:'red', fontSize:18}}>Delete Account</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{margin:20, marginTop:0}}>
                    <Text style={{color:'red', fontSize:18}}>Log Out</Text>
                  </TouchableOpacity>

                </Content>
            </Container>
        );
    }
}

const styless = StyleSheet.create({
    container: {
        flexDirection : 'row',
        alignItems:'center',
        width: '95%',
        alignSelf:'center',
        justifyContent : 'space-between',

    },
});

export default SettingPage;
