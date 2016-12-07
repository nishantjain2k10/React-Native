import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import Hr from 'react-native-hr';
export default class WhoAreYou extends Component {
    render()
    {
        return (
            <TouchableHighlight style={styles.container} onPress={this.props.onPress} underlayColor={'gray'}>
                <View >
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 18
                    }}>{this.props.name}{"\n"}</Text>
                    <Text style={{
                        fontSize: 15
                    }}>{this.props.helpText}{"\n"}</Text>

                </View>
            </TouchableHighlight>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 4,
        marginLeft: 7,
        justifyContent: 'center'

    },
    text: {
        fontSize: 20
    }
});
