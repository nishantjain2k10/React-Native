import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';

export default class Greeting extends Component
{
    render()
    {
        return (
            <View style={styles.container}>
                <Image source={{
                    uri: 'http://192.168.1.222:8005/media/settings/Veris_Combined_Gradient_fit.png'
                }} style={styles.image}/>
                <Text style={styles.text}>{this.props.organizationName}</Text>
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
    image: {
        width: 220,
        height: 160
    },
    text: {
        fontSize: 20
    }
});
