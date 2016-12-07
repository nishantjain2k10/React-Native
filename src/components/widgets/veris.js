import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

export default class VerisWidget extends Component
{
    render()
    {
        return (
            <View style={styles.container}>
                <TouchableHighlight>
                    <Text style={styles.text}>Logout</Text>
                </TouchableHighlight>

                <TouchableHighlight>
                    <Image source={require('../images/verisLogo.png')} style={styles.image}/>
                </TouchableHighlight>

                <TouchableHighlight>
                    <Text style={styles.text}>Settings</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
