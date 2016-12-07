import React , {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import * as vars from '../libs/vars';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Actions from '../actions/index';
import Button from './button' ;

//mapStateToProps’ and ‘mapDispatchToProps’ are two functions bound with ‘connect’ to the component: this
//makes Redux know that this component needs to be passed a piece of the state (everything under ‘userReducers’) and all the actions
//available in the app.
function mapStateToProps(state) { return {user : state.userReducers}}
//function mapDispatchToProps(dispatch) { return bindActionCreators(Actions,dispatch);}

class LoginComponent extends Component
{
  constructor(props)
  {
    super(props);
     this.state = {
       username : 'TERMI814652',
       password : '43577466'
     };

  }
  onLoginButtonPress() {
    // console.log(this.props);

      this.props.dispatch(Actions(this.state.username ,this.state.password));
      console.log(this.props.user);

      //this.props.navigator.push({name : 'logout'});

  }


  componentWillReceiveProps(nextProps)
  {

    console.log(this.props.user);
    console.log(nextProps.user);
    if(this.props.user.isLoggedIn != nextProps.user.isLoggedIn)
    {
      if(nextProps.user.isLoggedIn == true)
      {
        this.props.navigator.push({name : 'signout'});
      }
      else
      {
        this.props.navigator.push({name : 'signin'});
      }

    }
    AsyncStorage.getItem(vars.Organisation_Name).then((value) => {
                 console.log(value);
            }).done();

  }

  render()
  {

    return (
      <View style = {styles.container}>
          <Text style= {styles.title}>Sign In</Text>
          <Text style= {styles.label}>User Name:</Text>
          <TextInput style= {styles.textField}
          onChangeText = {(text) => this.setState({username : text})}
          />

          <Text style= {styles.label}>Passwd:</Text>
          <TextInput secureTextEntry = {true} style= {styles.textField}
          onChangeText = {(text) => this.setState({password : text})}
          />



          <TouchableHighlight style={styles.button} onPress = {this.onLoginButtonPress.bind(this)}>
              <Text>Log In</Text>
          </TouchableHighlight>


          {!this.props.user.isLoggedIn  && <Text style={styles.label}>Login Failed</Text> }


      </View>
    );
  }

}

// {if(this.props.user.isLoggedIn == false)
//   <Text style = {styles.label}>Login Failed</Text>
// }


// <Button text = {'Log In'} onPress = {this.onLoginButtonPress.bind(this)} />
// <Button text = {'Log in'} onPress = {this.onLoginButtonPress}/>
const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center' ,
    alignItems : 'center'
  },
  title : {

  },
  label : {
    fontSize : 18
  },
  textField : {
    padding : 4 ,
    height : 40 ,
    borderColor  : 'gray' ,
    borderWidth : 1,
    borderRadius : 5,
    margin : 5,
    width : 200 ,
    alignSelf  : 'center'
  }


});

export default connect(mapStateToProps)(LoginComponent);
