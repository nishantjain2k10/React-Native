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

// var ROUTES = {
//   signin : Login ,
//   signout : Logout,
//   error : Error
// };

class Main extends Component
{


componentWillReceiveProps(nextProps)
{

}


  render(){

return (
  <Router>
       <Scene key="root">
         <Scene key="pageOne" component={Login} title="Login" initial={true} />
         <Scene key="pageTwo" component={Logout} title="Logout" />
       </Scene>
     </Router>
);


}
  renderScene(route,navigator) {
    var Component = ROUTES[route.name]; //ROUTES['signin'] => Signin
    return <Component route ={route} navigator = {navigator}/> ;
  }
}
const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  }

});

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
