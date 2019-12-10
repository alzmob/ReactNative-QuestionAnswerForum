import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';


import FirstPage from "../screens/FirstPage";
import LoginPage from "../screens/LoginPage";
import SignupPage from "../screens/SignupPage";
import HomePage from "../screens/HomePage";
import EditCategoryPage from "../screens/EditCategoryPage";
import InterestedCategoryPage from "../screens/InterestedCategoryPage";
import QuestionDetailedPage from "../screens/QuestionDetailedPage";
import PostQuestionPage from "../screens/PostQuestionPage";
import SettingPage from "../screens/SettingPage";


const AppNavigator = createStackNavigator({
    FirstPage : { screen: FirstPage},
    LoginPage : {screen: LoginPage },
    SignupPage : {screen : SignupPage},
    HomePage : {screen : HomePage },
    EditCategoryPage : {screen : EditCategoryPage },
    InterestedCategoryPage : {screen : InterestedCategoryPage },
    QuestionDetailedPage : {screen : QuestionDetailedPage },
    PostQuestionPage : {screen : PostQuestionPage },
    SettingPage : {screen : SettingPage },
},{
    initialRouteName: 'FirstPage',
    headerMode: 'none',
})


export default createAppContainer(AppNavigator);
