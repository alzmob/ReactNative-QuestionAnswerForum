import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Input } from 'native-base';

import BackButton from '../components/backButton';
import styles from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Rating, AirbnbRating } from 'react-native-ratings';

const {deviceWidth, deviceHeight} = Dimensions.get("window");


class QuestionDetailedPage extends Component<Props> {

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
                    <Text style={{fontSize:18}}>View a question</Text>
                  </Body>
                  <Right>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SettingPage')}>
                      <Icon name="settings" />
                    </TouchableOpacity>
                  </Right>
                </Header>

                <Content style={{backgroundColor:'rgba(0,0,0,0.1)'}}>
                    <View style={styless.container}>
                        <Text style={{fontSize:18, backgroundColor:'white', padding:10}}>Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it</Text>

                        <TouchableOpacity style={{marginTop:20, justifyContent:'space-between', flexDirection:'row', alignSelf:'center'}}>
                          <Text style={{fontSize:15, color:'green'}}>Follow question</Text>
                        </TouchableOpacity>

                        <View style={{flexDirection:'row', justifyContent:'space-between', margin:10, marginLeft:50, marginRight:50}}>
                          <View>
                            <Text style={{color:'red'}}>30  comments</Text>
                          </View>
                          <View>
                            <Text style={{color:'red'}}>200  followers</Text>
                          </View>
                        </View>

                        <View style={{backgroundColor:'white', marginBottom:2}}>
                          <Text style={{padding:10, paddingBottom:0, color:'red'}}>Age : <Text style={{color:'black'}}>Lorem Ipsum simply dummy text of the printing The point of using Lorem inspeid eidkeis spei Why do at his layout.</Text></Text>
                          <Rating
                            type='custom'
                            ratingCount={5}
                            startingValue={5}
                            imageSize={15}
                            readonly
                            ratingColor='#f00'
                            style={{alignSelf:'flex-end', marginRight:20, marginBottom:5}}
                          />
                        </View>
                        <View style={{backgroundColor:'white', marginBottom:2}}>
                          <Text style={{padding:10, paddingBottom:0, color:'red'}}>Age : <Text style={{color:'black'}}>Lorem Ipsum simply dummy text of the printing The point of using Lorem inspeid eidkeis spei Why do at his layout.</Text></Text>
                          <Rating
                            type='custom'
                            ratingCount={5}
                            startingValue={5}
                            imageSize={15}
                            readonly
                            ratingColor='#f00'
                            style={{alignSelf:'flex-end', marginRight:20, marginBottom:5}}
                          />
                        </View>
                        <View style={{backgroundColor:'white', marginBottom:2}}>
                          <Text style={{padding:10, paddingBottom:0, color:'red'}}>Age : <Text style={{color:'black'}}>Lorem Ipsum simply dummy text of the printing The point of using Lorem inspeid eidkeis spei Why do at his layout.</Text></Text>
                          <Rating
                            type='custom'
                            ratingCount={5}
                            startingValue={5}
                            imageSize={15}
                            readonly
                            ratingColor='#f00'
                            style={{alignSelf:'flex-end', marginRight:20, marginBottom:5}}
                          />
                        </View>
                        <View style={{backgroundColor:'white', marginBottom:2}}>
                          <Text style={{padding:10, paddingBottom:0, color:'red'}}>Age : <Text style={{color:'black'}}>Lorem Ipsum simply dummy text of the printing The point of using Lorem inspeid eidkeis spei Why do at his layout.</Text></Text>
                          <Rating
                            type='custom'
                            ratingCount={5}
                            startingValue={5}
                            imageSize={15}
                            readonly
                            ratingColor='#f00'
                            style={{alignSelf:'flex-end', marginRight:20, marginBottom:5}}
                          />
                        </View>
                        <View style={{backgroundColor:'white', marginBottom:2}}>
                          <Text style={{padding:10, paddingBottom:0, color:'red'}}>Age : <Text style={{color:'black'}}>Lorem Ipsum simply dummy text of the printing The point of using Lorem inspeid eidkeis spei Why do at his layout.</Text></Text>
                          <Rating
                            type='custom'
                            ratingCount={5}
                            startingValue={5}
                            imageSize={15}
                            readonly
                            ratingColor='#f00'
                            style={{alignSelf:'flex-end', marginRight:20, marginBottom:5}}
                          />
                        </View>
                        <View style={{backgroundColor:'white', marginBottom:2}}>
                          <Text style={{padding:10, paddingBottom:0, color:'red'}}>Age : <Text style={{color:'black'}}>Lorem Ipsum simply dummy text of the printing The point of using Lorem inspeid eidkeis spei Why do at his layout.</Text></Text>
                          <Rating
                            type='custom'
                            ratingCount={5}
                            startingValue={5}
                            imageSize={15}
                            readonly
                            ratingColor='#f00'
                            style={{alignSelf:'flex-end', marginRight:20, marginBottom:5}}
                          />
                        </View>

                    </View>
                </Content>
            </Container>
        );
    }
}

const styless = StyleSheet.create({
    container: {
        width: '98%',
        alignSelf:'center',
        marginTop:20,
    },
});

export default QuestionDetailedPage;
