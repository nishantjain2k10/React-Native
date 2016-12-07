import React , {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Navigator
} from 'react-native';

import Login from './Login';
import Logout from './Logout';


import {connect} from 'react-redux';

import {Actions, Scene, Router} from 'react-native-router-flux';



function mapStateToProps(state) { return {user : state.userReducers}};

const styles = StyleSheet.create({
  container : {
    flex : 1
    // alignItems : 'center',
    // justifyContent : 'center'
  },
  container1 : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  }

});

const Error = (
  <View>
        <Login/>
        <Text>wrong credentials</Text>
   </View>
 );
var ROUTES = {
  signin : Login,
  signout : Logout
  };

class Main extends Component
{
//
// condition()
// {
//   let  App = null;
//   console.log("ninja");
//   if(this.props.user.isLoggedIn  == true)
//   {
//     App = <Logout/>;
//   }
//
//  else if(this.props.user.isLoggedIn == 'ninja')
//  {
//
//      App = <Login/>;
//
//
// }
// else
//   {
//     App = (
//     <View style = {styles.container}>
//       <Login/>
//       <Text>wrong credentials</Text>
//     </View>
//   );
//
//   }
//
//  return App;
// }




  render(){
console.log("ninja");
return (
  <Navigator
  style ={styles.container}
  initialRoute = {{name : 'signin'}}
  renderScene= {this.renderScene.bind(this)}
  configureScene = { () => {return Navigator.SceneConfigs.FloatFromRight ;}}
   />
);


}
  renderScene(route,navigator) {
    var Component = ROUTES[route.name]; //ROUTES['signin'] => Signin
    console.log("first screen");
    //console.log(Component);
    console.log(route.name);
    return <Component route ={route} navigator = {navigator}/>;
  }
}


// const App = this.props.user.isLoggedIn ? <Logout/> : <Login/>;
// // console.log(this.props.user.isLoggedIn);
// // console.log(this.props.user.username);
// if(this.props.user.isLoggedIn  == true)
// {return(
//  <Logout/>
// );}
//
// else if(this.props.user.isLoggedIn == 'ninja')
// {return(
//
//    <Login/>
//
//
// );}
// else
// {return(
//   <View style = {styles.container}>
//     <Login/>
//     <Text>wrong credentials</Text>
//   </View>
//
// );}





export default connect(mapStateToProps)(Main);
