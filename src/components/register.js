import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TextInput,
    Dimensions
} from 'react-native';

import Hr from 'react-native-hr';

import Camera from 'react-native-camera';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Actions from '../actions/index';
import otpVerify from '../actions/otpVerify';
import makeProfile from '../actions/makeProfile';

function mapStateToProps(state) {
    return {user: state.userReducers, otpData: state.otpActionReducer, pictureData: state.cameraReducer, profileData: state.makeProfileReducer}
}
class Register extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            pin: '',
            picture: ''
        }
    }
    render()
    {
        console.log("rendering register screen");
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
                        fontSize: 15
                    }}>First Name:</Text>
                    <TextInput style={styles.textField} onChangeText= {(text) => this.setState({firstName : text})}/>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 15
                    }}>Last Name:</Text>
                    <TextInput style={styles.textField} onChangeText= {(text) => this.setState({lastName : text})}/>

                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 15
                    }}>Profile Picture</Text>
                    <TouchableHighlight style={{
                        backgroundColor: 'green',
                        height: 35,
                        marginTop: 10,
                        width: 100,
                        marginLeft: 6,
                        justifyContent: 'center'
                    }} onPress={this.onCamera.bind(this)} underlayColor='gray'>
                        <Text style={{
                            color: 'white',
                            alignSelf: 'center'
                        }}>Capture</Text>
                    </TouchableHighlight>

                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 15
                    }}>Password</Text>
                    <TextInput style ={styles.textField} onChangeText= {(text) => this.setState({pin : text})}/>

                    <TouchableHighlight style={{
                        backgroundColor: 'green',
                        height: 35,
                        marginTop: 10,
                        width: 100,
                        marginLeft: 6,
                        justifyContent: 'center'
                    }} onPress={this.onSave.bind(this)} underlayColor='gray'>
                        <Text style={{
                            color: 'white',
                            alignSelf: 'center'
                        }}>Save</Text>
                    </TouchableHighlight>
                </View>

            </View>

        );
    }

    onCamera()
    {
        console.log("carry on camera");
        this.props.navigator.replace({name: 'camera'});
    }

    onSave()
    {
        console.log("submisson done guys");
        this.props.dispatch(makeProfile(this.state.firstName, this.state.lastName, this.state.pin, this.props.pictureData.pictureData, this.props.otpData.verisToken))

    }
    componentWillReceiveProps(nextProps)
    {
        console.log("props has been changed , now go to profile screen");
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
        flex: 10,
        marginLeft: 7

    },
    container3: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'

    },
    textField: {
        padding: 4,
        height: 35,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        width: 200

    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }

});

export default connect(mapStateToProps)(Register);
