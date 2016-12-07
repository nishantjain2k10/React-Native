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
import Greeting from './widgets/greeting';
import Start from './widgets/start';

function mapStateToProps(state) {
    return {user: state.userReducers}
}
class Home extends Component
{

    constructor(props) {
        super(props);
    }
    render()
    {
        return (
            <View style={styles.container}>
                <Greeting organizationName={this.props.user.organizationName} organizationLogo={this.props.user.organizationLogo}/>
                <Start onPress={this.tapPress.bind(this)}/>
                <View style={styles.container3}>
                    <Text>Ninja</Text>
                </View>
            </View>
        );
    }

    tapPress()
    {
        console.log("ninja is Good");
        this.props.navigator.replace({name: 'container'});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    container3: {
        flex: 1,
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

export default connect(mapStateToProps)(Home);
