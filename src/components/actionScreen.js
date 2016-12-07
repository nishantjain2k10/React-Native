import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

import Hr from 'react-native-hr';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Actions from '../actions/index';

function mapStateToProps(state) {
    return {user: state.userReducers}
}
class ActionScreen extends Component
{

    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <View style={styles.container}>

                <View style={styles.container1}>
                    <Text style={{
                        color: 'blue',
                        fontSize: 15
                    }}>WELCOME TO {this.props.user.organizationName}</Text>
                    <Text style={{
                        marginTop: 3,
                        fontWeight: "bold",
                        fontSize: 18
                    }}>Action{"\n"}</Text>

                </View>
                <Hr style={{
                    flex: 1
                }} lineColor='#b3b3b3' textColor='steelblue'/>

                <TouchableHighlight style={styles.containerCheckIn} onPress={this.onCheckIn.bind(this)} underlayColor={'gray'}>
                    <View>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18
                        }}>Checking In?{"\n"}</Text>
                        <Text style={{
                            fontSize: 15
                        }}>Have you just reached this door and are going inside? Have a great meeting? {"\n"}</Text>
                    </View>
                </TouchableHighlight>
                <Hr style={{
                    flex: 1
                }} lineColor='#b3b3b3' textColor='steelblue'/>
                <TouchableHighlight style={styles.containerCheckOut} onPress={this.onCheckOut.bind(this)} underlayColor={'gray'}>
                    <View>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18
                        }}>Checking Out?{"\n"}</Text>
                        <Text style={{
                            fontSize: 15
                        }}>How did it go? Had a great meeting? see you next time !!{"\n"}</Text>
                    </View>
                </TouchableHighlight>

                <Hr style={{
                    flex: 1
                }} lineColor='#b3b3b3' textColor='steelblue'/>
                <View style={styles.container3}>
                    <Text style={{
                        color: 'blue',
                        fontSize: 24
                    }}>Ninja</Text>
                </View>
            </View>

        );
    }

    onCheckIn()
    {
        console.log("Check in");
    }
    onCheckOut()
    {
        console.log("Check out");
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
    containerCheckIn: {
        flex: 3,
        marginLeft: 7,
        justifyContent: 'center'

    },
    containerCheckOut: {
        flex: 3,
        marginLeft: 7,
        justifyContent: 'center'

    }

});

export default connect(mapStateToProps)(ActionScreen);
