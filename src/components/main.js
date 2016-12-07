import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Navigator} from 'react-native';

import Login from './login';
import Home from './home';
import Container from './container';
import ActionScreen from './actionScreen';
import ProceedScreen from './proceedScreen';
import EnterOTP from './enterOTP';
import RegisterProfile from './register';
import Camera from './camera'

import {connect} from 'react-redux';

var ROUTES = {
    signin: Login,
    home: Home,
    container: Container,
    actionScreen: ActionScreen,
    proceedScreen: ProceedScreen,
    enterOTP: EnterOTP,
    registerProfile: RegisterProfile,
    camera: Camera
};

function mapStateToProps(state) {
    return {user: state.userReducers}
};
class Main extends Component
{

    render()
    {
        return (<Navigator style={styles.container} initialRoute={{
            name: 'signin'
        }} renderScene={this.renderScene.bind(this)} configureScene= { () => {return Navigator.SceneConfigs.FloatFromRight ;}}/>);
    }
    renderScene(route, navigator) {
        var Component = ROUTES[route.name];
        return <Component route ={route} navigator={navigator}/>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default connect(mapStateToProps)(Main);
