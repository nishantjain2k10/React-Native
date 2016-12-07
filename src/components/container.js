import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight
} from 'react-native';

import Hr from 'react-native-hr';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Actions from '../actions/index';
import ActionWidget from './widgets/Action';
import WhoAreYouWidget from './widgets/WhoAreYou';

function mapStateToProps(state) {
    return {user: state.userReducers}
}
class Container extends Component
{

    constructor(props)
    {
        super(props);
    }
    render()
    {
        console.log("render container component");
        return (
            <View style={styles.container}>

                <View style={styles.container1}>
                    <Text style={{
                        color: 'blue',
                        fontSize: 15
                    }}>WELCOME TO</Text>
                    <Text style={{
                        marginTop: 3,
                        fontWeight: "bold",
                        fontSize: 15
                    }}>{this.props.user.organizationName}{"\n"}</Text>

                </View>
                <Hr style={{
                    flex: 1
                }} lineColor='#b3b3b3' textColor='steelblue'/>
                <ActionWidget name={this.props.user.screens.results[1].enabled_widgets[0].widget.name} helpText={this.props.user.screens.results[1].enabled_widgets[0].widget.help_text} onPress={this.onActionWidget.bind(this)}/>
                <Hr style={{
                    flex: 1
                }} lineColor='#b3b3b3' textColor='steelblue'/>
                <WhoAreYouWidget name={this.props.user.screens.results[1].enabled_widgets[1].widget.name} helpText={this.props.user.screens.results[1].enabled_widgets[1].widget.help_text} onPress={this.onWhoAreYouWidget.bind(this)}/>
                <Hr style={{
                    flex: 1
                }} lineColor='#b3b3b3' textColor='steelblue'/>
                <View style={styles.container3}></View>
            </View>

        );
    }

    onActionWidget()
    {
        console.log("Action");
        this.props.navigator.replace({name: 'actionScreen'});
    }
    onWhoAreYouWidget()
    {
        console.log("who are you bro");
        this.props.navigator.replace({name: 'proceedScreen'});
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'

    },
    container1: {
        flex: 2,
        justifyContent: 'center',
        marginLeft: 7
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    container3: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center'

    },
    greeting: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    start: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    veris: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default connect(mapStateToProps)(Container);
