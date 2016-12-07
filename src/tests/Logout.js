import React , {Component}  from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import Actions from '../actions/index';

//import Login  from './Login'



function mapStateToProps(state) { return {user : state.userReducers}}
//function mapDispatchToProps(dispatch) { return bindActionCreators(Actions,dispatch

class Logout extends Component {

  render()
  {

      return (
        <View style = {styles.container}>
          <Text style = {styles.text}>Logged In successfully</Text>
          <Text style = {styles.text}>{this.props.user.username}</Text>

        </View>
      );



  }
}

const styles= StyleSheet.create({

  container : {
    flex : 1,
    alignItems : 'center' ,
    justifyContent : 'center'

  },
  text:{
    fontSize : 18
  }

});

export default connect(mapStateToProps)(Logout);
