import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Input } from 'native-base';

import BackButton from '../components/backButton';
import styles from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {deviceWidth, deviceHeight} = Dimensions.get("window");


class PostQuestionPage extends Component<Props> {

    constructor(props) {
      super(props);
      this.state = {
        is_selectedCategory: true,
        selected_category: "",
        categoryArray: [
          'Sports & fitness',
          'Relationships',
          'Politics',
          'Kids & family',
          'Music',
          'Shopping',
          'Jokes & Riddles',
          'Art & Design',
          'Freelance','Getting married',
          'Others...'
        ]
      };
      this.DoSelectCategory = this.DoSelectCategory.bind(this);
    }

    DoSelectCategory(_counterFromChild) {
      this.setState({selected_category: this.state.categoryArray[_counterFromChild]});
      this.setState({is_selectedCategory:!this.state.is_selectedCategory});
    }


    click_selectCategoryBtn() {
      this.setState({is_selectedCategory:!this.state.is_selectedCategory})
    }

    showCategories() {
      var i=-1;
      return this.state.categoryArray.map((data) => {
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
                      <Text> Cancel</Text>
                    </TouchableOpacity>
                  </Left>
                  <Body>
                    <Text style={{fontSize:18}}>Post a question</Text>
                  </Body>
                  <Right>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                      <Text> Post</Text>
                    </TouchableOpacity>
                  </Right>
                </Header>

                <Content>
                    <View style={styless.container}>
                        <Input multiline={true}
                           numberOfLines={4}
                           blurOnSubmit={false}
                           style={{height:300, borderColor:'rgba(0,0,0,0.3)', borderWidth:1}} placeholder = "ask your question..." />

                        <TouchableOpacity style={{backgroundColor:'rgba(0,0,0,0.1)', borderColor:'rgba(0,0,0,0.7)', borderWidth:1, marginTop:40,  justifyContent:'space-between', flexDirection:'row', alignItems:'center', padding:10}} onPress={() => this.click_selectCategoryBtn()}>
                          <Text style={{fontSize:15}}>{this.state.selected_category=="" ? "Select category" : this.state.selected_category}</Text>
                          <Icon name={this.state.is_selectedCategory? 'arrow-dropdown' : 'arrow-dropup'} style={{fontSize:25}} />
                        </TouchableOpacity>

                        {!this.state.is_selectedCategory ?
                          <View>
                            {this.showCategories()}
                          </View>
                        : null
                        }

                        <TouchableOpacity style={{backgroundColor:'rgba(0,0,0,0.1)', borderColor:'rgba(0,0,0,0.7)', borderWidth:1, marginTop:20,  justifyContent:'space-between', flexDirection:'row', alignItems:'center', padding:10}}>
                          <Text style={{fontSize:15}}>Select location</Text>
                          <Icon name='arrow-dropdown' style={{fontSize:25}} />
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styless = StyleSheet.create({
    container: {
        width: '95%',
        alignSelf:'center',
        marginTop:20,
    },
});

export default PostQuestionPage;


class Child_category extends Component {

  clickItem(i) {
    this.props.selectCategory(i)
  }

  render() {
    return (
      <TouchableOpacity style={{backgroundColor:'rgba(0,0,0,0.1)', borderColor:'rgba(0,0,0,0.2)', borderWidth:1, marginTop:0,  justifyContent:'space-between', flexDirection:'row', alignItems:'center', padding:10, paddingLeft:20}} onPress={() => this.clickItem(this.props.index)}>
        <Text style={{fontSize:15}}>{this.props.itemData}</Text>
      </TouchableOpacity>
    );
  }
}
