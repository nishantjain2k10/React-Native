import React, {Component} from 'react';
import {View, Text, AppRegistry} from 'react-native';

import Menu, {MenuContext, MenuOptions, MenuOption, MenuTrigger} from 'react-native-menu';

export default class MenuDemo extends Component
{
    render() {
        return (
            <MenuContext style={{
                flex: 1
            }}>
                <View style={{
                    padding: 10,
                    flexDirection: 'row',
                    backgroundColor: 'pink'
                }}>
                    <View style={{
                        flex: 1
                    }}>
                        <Text>My App</Text>
                    </View>
                    <Menu onSelect={(value) => alert(`User selected the number ${value}`)}>
                        <MenuTrigger>
                            <Text style={{
                                fontSize: 20
                            }}>&#8942;</Text>
                        </MenuTrigger>
                        <MenuOptions>
                            <MenuOption value={1}>
                                <Text>One</Text>
                            </MenuOption>
                            <MenuOption value={2}>
                                <Text>Two</Text>
                            </MenuOption>
                        </MenuOptions>
                    </Menu>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>Hello!</Text>
                </View>
            </MenuContext>
        );
    }

}
