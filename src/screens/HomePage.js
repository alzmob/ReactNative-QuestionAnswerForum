import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TextInput } from 'react-native';

import { Container, Header, Left, Right, Body, Title, Content, Tab, Tabs, Icon, TabHeading } from 'native-base';

import BackButton from '../components/backButton';
import ProfilePage from '../screens/ProfilePage';
import styles from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {deviceWidth, deviceHeight} = Dimensions.get("window");

class HomePage extends Component<Props> {

    constructor(props) {
      super(props);
      this.state = {
        categoryItems : [
          {
            name : 'Mohamed1',
            content : 'I will ask some questions regarding football game. Everyone can answer me.',
            followers : 100,
            answers : 50
          },{
            name : 'Mohamed2',
            content : 'I will ask some questions regarding football game. Everyone can answer me.',
            followers : 100,
            answers : 50
          },{
            name : 'Mohamed3',
            content : 'I will ask some questions regarding football game. Everyone can answer me.',
            followers : 100,
            answers : 50
          },{
            name : 'Mohamed4',
            content : 'I will ask some questions regarding football game. Everyone can answer me.',
            followers : 100,
            answers : 50
          },{
            name : 'Mohamed5',
            content : 'I will ask some questions regarding football game. Everyone can answer me.',
            followers : 100,
            answers : 50
          },{
            name : 'Mohamed6',
            content : 'I will ask some questions regarding football game. Everyone can answer me.',
            followers : 100,
            answers : 50
          },{
            name : 'Mohamed7',
            content : 'I will ask some questions regarding football game. Everyone can answer me.',
            followers : 100,
            answers : 50
          },{
            name : 'Mohamed8',
            content : 'I will ask some questions regarding football game. Everyone can answer me.',
            followers : 100,
            answers : 50
          },{
            name : 'Mohamed9',
            content : 'I will ask some questions regarding football game. Everyone can answer me.',
            followers : 100,
            answers : 50
          },{
            name : 'Mohamed',
            content : 'I will ask some questions regarding football game. Everyone can answer me.',
            followers : 100,
            answers : 50
          },
        ],
        notificationsArray : [
          'Someone editied your post',
          'Someone followed your post',
          'You have 160 for your question',
          'Baboon asked a question',
          'There is new category added',
          'Someone editied your post',
          'Someone followed your post',
          'You have 80 for your question',
          'Someone editied your post',
          'Someone followed your post',
          'You have 160 for your question',
          'Baboon asked a question',
          'There is new category added',
          'Someone editied your post',
          'Someone followed your post',
          'You have 80 for your question',
        ]
      };
      this.DoSelectCategory = this.DoSelectCategory.bind(this);
      this.DoNotification = this.DoNotification.bind(this);
    }

    DoSelectCategory(_counterFromChild) {
      this.props.navigation.navigate('QuestionDetailedPage')
    }

    DoNotification(_counterFromChild) {
      var tempArray = this.state.notificationsArray;
      tempArray.splice(_counterFromChild, 1);
      this.setState({notificationsArray : tempArray})
    }

    showQuestions() {
      var i=-1;
      return this.state.categoryItems.map((data) => {
        i++;
        return (
          <Child_category key={i} itemData={data} index={i} selectCategory={this.DoSelectCategory} />
        )
      })
    }

    showNotifications() {
      var i=-1;
      return this.state.notificationsArray.map((data) => {
        i++;
        return (
          <Child_notification key={i} itemData={data} index={i} selectNotification={this.DoNotification} />
        )
      })
    }

    clickPost() {
      this.props.navigation.navigate('PostQuestionPage')
    }

    render() {
        return (
            <Container>
              <Header>
                <Left />
                <Body>
                  <Text style={{fontSize:20, fontWeight:'500'}}>Nouh</Text>
                </Body>
                <Right>
                  <TouchableOpacity onPress={() => this.clickPost()}>
                    <Text>Post</Text>
                  </TouchableOpacity>
                </Right>
              </Header>

              <Tabs tabBarPosition="bottom">
                <Tab heading={ <TabHeading><Icon name="home" /><Text> Home</Text></TabHeading>}>
                  <View>
                    <TextInput placeholder="Search..." placeholderTextColor="white" style={{backgroundColor:'rgba(0,0,0,0.5)', height:'8%', color:'white', margin:10, padding:10}} />
                    <ScrollView style={{}}>
                      {this.showQuestions()}
                    </ScrollView>
                  </View>
                </Tab>

                <Tab heading={ <TabHeading><Icon name="pin" /><Text> Near me</Text></TabHeading>}>
                  <ScrollView style={{}}>
                    {this.showQuestions()}
                  </ScrollView>
                </Tab>

                <Tab heading={ <TabHeading><Icon name="notifications" /><Text> Notifications</Text></TabHeading>}>
                  <ScrollView style={{}}>
                    {this.showNotifications()}
                  </ScrollView>
                </Tab>

                <Tab heading={ <TabHeading><Icon name="person" /><Text> Profile</Text></TabHeading>}>
                  <ProfilePage />
                </Tab>
              </Tabs>
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

export default HomePage;


class Child_category extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }

  clickItem(i) {
    this.props.selectCategory(i)
  }

  render() {
    return (
      <TouchableOpacity style={{marginBottom:2, backgroundColor:'rgba(0,0,0,0.1)'}} onPress={() => this.clickItem(this.props.index)}>
        <Text style={{color:'red', margin:10, fontSize:18}}>{this.props.itemData.name} : <Text style={{color:'black'}}>{this.props.itemData.content}</Text></Text>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <View style={{flexDirection:'row', alignItems:'center', marginLeft:50}}>
            <Icon name="mail" style={{fontSize:25}} />
            <Text> {this.props.itemData.answers}</Text>
            <Text> answers</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', marginRight:50}}>
            <Icon name="happy" style={{fontSize:23}} />
            <Text> {this.props.itemData.followers}</Text>
            <Text> followers</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}


class Child_notification extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }

  clickItem(i) {
    this.props.selectNotification(i)
  }

  render() {
    return (
      <View style={{marginBottom:2, flexDirection:'row', alignItems:'center', justifyContent:'space-between', backgroundColor:'rgba(0,0,0,0.1)'}}>
        <Text style={{fontWeight:'400', fontSize:18, color:'black', margin:10}}>{this.props.itemData}</Text>
        <TouchableOpacity style={{}} onPress={() => this.clickItem(this.props.index)}>
          <Icon style={{marginRight:10}} name="trash" />
        </TouchableOpacity>
      </View>
    );
  }
}
