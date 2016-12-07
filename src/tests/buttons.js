import { Button } from 'react-native-elements'
import React, {Component} from 'react'
import {
  TouchableHighlight ,
  View,
  Text,
  StyleSheet
} from 'react-native'
export default class Buttons extends Component{
  render() {
    return (
      <View style={{flex : 1 ,alignItems : 'center' , justifyContent : 'space-between'}}>
        <TouchableHighlight>
          <Button
            title='BUTTON' />
        </TouchableHighlight>
        <TouchableHighlight>
          <Button
            raised
            icon={{name: 'cached'}}
            title='BUTTON WITH ICON' />
        </TouchableHighlight>
        <TouchableHighlight>
          <Button
            large
            iconRight
            icon={{name: 'code'}}
            title='LARGE WITH RIGHT ICON' />
        </TouchableHighlight>
        <TouchableHighlight>
          <Button
            large
            icon={{name: 'envira', type: 'font-awesome'}}
            title='LARGE WITH RIGHT ICON' />
        </TouchableHighlight>
        <TouchableHighlight>
          <Button
            large
            icon={{name: 'squirrel', type: 'octicon'}}
            title='OCTICON' />
        </TouchableHighlight>
      </View>
    );
  }
}
