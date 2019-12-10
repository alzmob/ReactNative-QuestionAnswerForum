import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Input } from 'native-base';

import BackButton from '../components/backButton';
import styles from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {deviceWidth, deviceHeight} = Dimensions.get("window");

class ProfilePage extends Component<Props> {

    render() {
        return (
            <View style={{margin:50, marginRight:0}}>
              <Text style={{fontSize:18, fontStyle:'italic'}}>full name : </Text>
              <Text style={{fontSize:20, fontWeight:'500', marginLeft:50}}>Mohamed Tafreshi </Text>

              <Text style={{fontSize:18, fontStyle:'italic', marginTop:20}}>email address : </Text>
              <Text style={{fontSize:20, fontWeight:'500', marginLeft:50}}>mohamed.tafreshi@gmail.com </Text>

              <Text style={{fontSize:18, fontStyle:'italic', marginTop:20}}>date of birth : </Text>
              <Text style={{fontSize:20, fontWeight:'500', marginLeft:50}}>Dec 4, 2019</Text>

              <Text style={{fontSize:18, fontStyle:'italic', marginTop:20}}>sex : </Text>
              <Text style={{fontSize:20, fontWeight:'500', marginLeft:50}}>Male</Text>

              <Text style={{fontSize:18, fontStyle:'italic', marginTop:20}}>location : </Text>
              <Text style={{fontSize:20, fontWeight:'500', marginLeft:50}}>Egypt </Text>
            </View>
        );
    }
}

export default ProfilePage;
