import React, {Component} from 'react';
import {Text, StyleSheet, TouchableHighlight, View} from 'react-native';

export default class Start extends Component {
    render()
    {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.button} underlayColor={'gray'} onPress={this.props.onPress}>
                    <Text style={styles.buttonText}>TAP TO START</Text>
                </TouchableHighlight>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        borderColor: 'black',
        marginTop: 10,
        height: 35,
        backgroundColor: 'green'
    },

    buttonText: {
        flex: 1,
        alignSelf: 'center',
        fontSize: 20,
        color: 'white'
    }

})
