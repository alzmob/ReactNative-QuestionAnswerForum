import { Dimensions, Platform } from 'react-native';
const {width, height} = Dimensions.get("window");

const styles = {
    firstPage: {
        loginButtonStyle : {
            backgroundColor: 'rgba(0,0,0,0.1)',
            borderColor: '#000',
            borderWidth: 1,
            width: width * 0.45,
            height: height * 0.05,
            margin : width * 0.01,
            alignItems: 'center',
            justifyContent : 'center'
        },
        loginButtonWithSocialStyle : {
            backgroundColor: 'rgba(0,0,0,0.1)',
            borderColor: '#000',
            borderWidth: 1,
            width: width * 0.92,
            height: height * 0.05,
            margin : width * 0.01,
            alignItems: 'center',
            justifyContent : 'center',
            flexDirection: 'row',
        },
        buttonTextStyle : {
            textAlign : 'center',
            color : 'red',
            alignSelf : 'center'
        },
        iconStyle : {
            width : width * 0.06,
            height : width * 0.06,
            marginRight: width * 0.1,
        }
    },
    backBtnStyle : {
        position : 'absolute',
        left : 10,
        top : height*0.05,
        width: width * 0.1,
        height : height * 0.03
    },
    loginPage : {
        textStyle : {
            fontSize : 15,
            textAlign :'left',
            width:'80%',
            color:'rgba(0,0,0,0.9)',
            marginBottom:5,
            marginLeft:10
        },
        inputStyle : {
            height : height * 0.05,
            width: '50%',
            borderWidth : 1,
            borderColor : 'rgba(0,0,0,0.3)',
            marginBottom : 10
        }
    }
};

export default styles;
