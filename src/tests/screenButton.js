import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class ScreenButton extends Component {
    render()
    {
        return (

            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{
                    height: 100,
                    width: 100,
                    borderRadius: 50,
                    backgroundColor: 'blue'
                }}></View>
                <View style={{
                    height: 100,
                    width: 100,
                    borderRadius: 50,
                    backgroundColor: 'pink',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        alignSelf: 'center'
                    }}>Ninja</Text>
                </View>
                <View style={{
                    height: 1,
                    width: 40,
                    backgroundColor: 'black'
                }}></View>

            </View>

        );
    }

}
