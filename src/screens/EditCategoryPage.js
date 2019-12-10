import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';

import { Container, Header, Left, Right, Body, Title, Content, Tab, Tabs, Icon, TabHeading } from 'native-base';

import BackButton from '../components/backButton';
import styles from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {deviceWidth, deviceHeight} = Dimensions.get("window");

class EditCategoryPage extends Component<Props> {

    constructor(props) {
      super(props);
      this.state = {
        categoryItems : [
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Sports & Fitness',
            is_selected : 0
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Relationships',
            is_selected : 1
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Politics',
            is_selected : 1
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Kids & family',
            is_selected : 0
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Music',
            is_selected : 1
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Shopping',
            is_selected : 1
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Jokes & Riddles',
            is_selected : 1
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Art & Design',
            is_selected : 1
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Freelance',
            is_selected : 1
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Getting married',
            is_selected : 1
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Others...',
            is_selected : 1
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Art & Design',
            is_selected : 1
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Freelance',
            is_selected : 1
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Getting married',
            is_selected : 1
          },
          {
            icon : require('../../images/googleIcon.png'),
            name : 'Others...',
            is_selected : 1
          }
        ]
      };
      this.DoSelectCategory = this.DoSelectCategory.bind(this);
    }

    DoSelectCategory(_counterFromChild) {
      var tempArray = this.state.categoryItems;
      if (tempArray[_counterFromChild].is_selected == 1)
        tempArray[_counterFromChild].is_selected = 0
      else
        tempArray[_counterFromChild].is_selected = 1
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

    render() {
        return (
            <Container>
              <Header>
                <Left>
                  <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>Cancel</Text>
                  </TouchableOpacity>
                </Left>
                <Body>
                  <Text style={{fontSize:20, fontWeight:'500'}}>Edit category</Text>
                </Body>
                <Right>
                  <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>Save</Text>
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

export default EditCategoryPage;


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
      <View style={{margin:10, flexDirection:'row', alignItems:'center'}}>
        {this.props.itemData.is_selected == 1 ?
          <Icon style={{color:'#fff'}} name="square-outline" />
        : <Icon style={{color:'#fff'}} name="checkbox" />
        }
        <Text style={{fontWeight:'500', fontSize:20, color:'white', margin:5}}>{this.props.itemData.name}</Text>
      </View>
    );
  }

  display_category() {
    if (this.props.index % 5 == 0) {
      return (
        <TouchableOpacity style={{backgroundColor:'rgba(0,0,0,0.2)'}} onPress={() => this.clickItem(this.props.index)}>
          {this.display_item()}
        </TouchableOpacity>
      );
    } else if (this.props.index % 5 == 1) {
      return (
        <TouchableOpacity style={{backgroundColor:'rgba(0,0,0,0.4)'}} onPress={() => this.clickItem(this.props.index)}>
          {this.display_item()}
        </TouchableOpacity>
      );
    } else if (this.props.index % 5 == 2) {
      return (
        <TouchableOpacity style={{backgroundColor:'rgba(0,0,0,0.6)'}} onPress={() => this.clickItem(this.props.index)}>
          {this.display_item()}
        </TouchableOpacity>
      );
    } else if (this.props.index % 5 == 3) {
      return (
        <TouchableOpacity style={{backgroundColor:'rgba(0,0,0,0.7)'}} onPress={() => this.clickItem(this.props.index)}>
          {this.display_item()}
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity style={{backgroundColor:'rgba(0,0,0,0.8)'}} onPress={() => this.clickItem(this.props.index)}>
          {this.display_item()}
        </TouchableOpacity>
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
