import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight
} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Actions from '../actions/index';
import dynamicSort from '../util/sortArray';

function mapStateToProps(state) {
    return {user: state.userReducers}
}
class Login extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            username: 'VERIS',
            password: '1'
        };

    }
    render()
    {
        return (
            <View style={styles.container}>
                <View style={styles.container1}>
                    <Image style={styles.image} source={require('../images/verisLogo.png')}/>

                    <Text style={styles.text}>LOG IN</Text>
                </View>

                <View style={styles.container2}>
                    <Text style={styles.label}>User Name:</Text>
                    <TextInput style={styles.textField} onChangeText= {(text) => this.setState({username : text})}/>

                    <Text style={styles.label}>Passwd:</Text>
                    <TextInput secureTextEntry={true} style={styles.textField} onChangeText= {(text) => this.setState({password : text})}/>

                    <TouchableHighlight style={styles.button} onPress={this.onLoginButtonPress.bind(this)}>
                        <Text>Log In</Text>
                    </TouchableHighlight>

                    {!this.props.user.isLoggedIn && <Text style={styles.label}>Login Failed</Text>}
                </View>
            </View>
        );
    }

    onLoginButtonPress()
    {
        this.props.dispatch(Actions(this.state.username, this.state.password));
    }
    componentWillReceiveProps(nextProps)
    {
        if (this.props.user.isLoggedIn != nextProps.user.isLoggedIn) {
            if (nextProps.user.isLoggedIn == true) {

                const numberOfScreens = nextProps.user.screens.results.length;
                console.log(numberOfScreens);
                //console.log(nextProps.user.screens.results);

                nextProps.user.screens.results.sort(dynamicSort("order"));
                console.log(nextProps.user.screens.results);
                let i;
                for (i = 0; i < numberOfScreens; i++) {
                    if (nextProps.user.screens.results[i].order === 0) {
                        console.log("screen is" + i);
                        this.props.navigator.push({name: 'home'});
                    }
                }
            } else {
                this.props.navigator.push({name: 'signin'});
            }

        }

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    container1: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'

    },
    container2: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },

    image: {
        width: 220,
        height: 180

    },
    text: {

        fontSize: 20
    },

    label: {
        fontSize: 18
    },
    textField: {
        padding: 4,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        width: 200,
        alignSelf: 'center'
    }

});

export default connect(mapStateToProps)(Login);
