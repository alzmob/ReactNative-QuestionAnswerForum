import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';

import { Container, Header, Left, Right, Body, Title, Content, Tab, Tabs, Icon, TabHeading } from 'native-base';

import BackButton from '../components/backButton';
import styles from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {deviceWidth, deviceHeight} = Dimensions.get("window");

class InterestedCategoryPage extends Component<Props> {

    constructor(props) {
      super(props);
      this.state = {
        categoryItems : [
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Sports & Fitness'
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Relationships'
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Politics'
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Kids & family'
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Music'
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Shopping'
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Jokes & Riddles'
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Art & Design'
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Freelance'
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Getting married'
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Others...'
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Jokes & Riddles'
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Art & Design'
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Freelance'
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Getting married'
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Others...'
          }
        ]
      };
      this.DoSelectCategory = this.DoSelectCategory.bind(this);
    }

    DoSelectCategory(_counterFromChild) {
      var tempArray = this.state.categoryItems;
      tempArray.splice(_counterFromChild, 1);
      this.setState({categoryItems : tempArray})
    }

    showCategories() {
      var i=-1;
      return this.state.categoryItems.map((data) => {
        i++;
        return (
          <Child_category key={i} itemData={data} index={i} selectCategory={this.DoSelectCategory} />
        )
      })
    }

    clickEdit() {
      this.props.navigation.navigate('EditCategoryPage')
    }

    render() {
        return (
            <Container>
              <Header>
                <Left>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('HomePage')}>
                    <Text>OK, Go</Text>
                  </TouchableOpacity>
                </Left>
                <Body>
                  <Text style={{fontSize:20, fontWeight:'500'}}>Nouh</Text>
                </Body>
                <Right>
                  <TouchableOpacity onPress={() => this.clickEdit()}>
                    <Text>Edit</Text>
                  </TouchableOpacity>
                </Right>
              </Header>

              <Content>
                {this.showCategories()}
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

export default InterestedCategoryPage;


class Child_category extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }

  clickItem(i) {
    this.props.selectCategory(i)
  }

  display_item() {
    return (
      <View style={{margin:10, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <Image source={this.props.itemData.icon} style={{width:30, height:30}} />
        <Text style={{fontWeight:'500', fontSize:20, color:'white', margin:5}}>{this.props.itemData.name}</Text>
        <TouchableOpacity style={{}} onPress={() => this.clickItem(this.props.index)}>
          <Icon style={{color:'#fff'}} name="trash" />
        </TouchableOpacity>
      </View>
    );
  }

  display_category() {
    if (this.props.index % 5 == 0) {
      return (
        <View style={{backgroundColor:'rgba(0,0,0,0.2)'}}>
          {this.display_item()}
        </View>
      );
    } else if (this.props.index % 5 == 1) {
      return (
        <View style={{backgroundColor:'rgba(0,0,0,0.4)'}}>
          {this.display_item()}
        </View>
      );
    } else if (this.props.index % 5 == 2) {
      return (
        <View style={{backgroundColor:'rgba(0,0,0,0.6)'}}>
          {this.display_item()}
        </View>
      );
    } else if (this.props.index % 5 == 3) {
      return (
        <View style={{backgroundColor:'rgba(0,0,0,0.7)'}}>
          {this.display_item()}
        </View>
      );
    } else {
      return (
        <View style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
          {this.display_item()}
        </View>
      );
    }
  }

  render() {
    return (
      <View>
        {this.display_category()}
      </View>
    );
  }
}
