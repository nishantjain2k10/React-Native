import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TextInput
} from 'react-native';

import Hr from 'react-native-hr';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Actions from '../actions/index';
import otpVerify from '../actions/otpVerify';

function mapStateToProps(state) {
    return {user: state.userReducers, otpData: state.otpActionReducer, userData: state.otpVerifyReducer}
}
class EnterOTP extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            OTP: ''
        }
    }
    render()
    {
        return (
            <View style={styles.container}>

                <View style={styles.container1}>
                    <Text style={{
                        color: 'blue',
                        fontSize: 15,
                        marginTop: 15
                    }}>WELCOME TO {this.props.user.organizationName}
                        {"\n"}</Text>
                    <Text style={{
                        marginTop: 3,
                        fontWeight: "bold",
                        fontSize: 21
                    }}>Who Are You ?{"\n"}</Text>

                </View>
                <Hr style={{
                    flex: 1,
                    width: 150
                }} lineColor='#b3b3b3' textColor='steelblue'/>

                <View style={styles.container2}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 18
                    }}>Enter Your OTP {"\n"}</Text>
                    <Text style={{
                        fontSize: 15
                    }}>Enter the verification code sent to</Text>
                    <Text>{this.props.otpData.phoneNumber}</Text>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: 'blue'
                    }}>OTP</Text>
                    <TextInput style ={styles.textField} onChangeText= {(text) => this.setState({OTP : text})}/>

                    <TouchableHighlight style={{
                        backgroundColor: 'green',
                        height: 35,
                        marginTop: 10,
                        width: 100,
                        marginLeft: 6,
                        justifyContent: 'center'
                    }} onPress={this.onProceed.bind(this)} underlayColor='gray'>
                        <Text style={{
                            color: 'white',
                            alignSelf: 'center'
                        }}>Verify</Text>
                    </TouchableHighlight>

                </View>

                <View style={styles.container3}></View>
            </View>

        );
    }

    onProceed()
    {

        console.log("verified");
        this.props.dispatch(otpVerify(this.props.otpData.phoneNumber, this.state.OTP, this.props.otpData.verisToken));
    }

    componentWillReceiveProps(nextProps)
    {
        console.log(nextProps);
        if (nextProps.userData.profileData.action.code === "profile_not_complete") {
            console.log("render register screen");
            this.props.navigator.push({name: 'registerProfile'});
        } else {
            console.log("Profile need not to be created");
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'

    },
    container1: {
        flex: 2,
        marginLeft: 7
    },
    container2: {
        flex: 7,
        justifyContent: 'center',
        marginLeft: 7
    },
    container3: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center'

    },
    textField: {
        padding: 4,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        width: 200

    }

});

export default connect(mapStateToProps)(EnterOTP);
