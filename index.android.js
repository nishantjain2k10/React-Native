import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Navigator} from 'react-native';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {applyMiddleware} from 'redux';
const loggerMiddleware = createLogger();


import Main from './src/components/main';

import userReducers from './src/reducers/user'; // take all if more than one

import {createStore, combineReducers, compose} from 'redux';

import {Provider} from 'react-redux';

// combineReducers({userReducers})
//let store = createStore(combineReducers({userReducers}));

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(combineReducers({userReducers}),  {}, composeEnhancers(
// applyMiddleware(
// thunkMiddleware
// )
// ));

const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware);
let store = createStore(combineReducers({userReducers}), compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
//let store = createStore(combineReducers({userReducers}),middleware);

store.subscribe(() => console.log(store.getState()))

// class App extends Component{
//   render(){
//     return (
//       <Login/>
//     );
//   }
// }
// const ROUTES = {
//   login : Login ,
//   logout : Logout
// };

class MyApp extends Component {
    constructor(props)
    {
        super(props);

    }

    // renderScene(route,navigator)
    // {
    //   var Component = ROUTES[route.name]; //ROUTES['signin'] => Signin
    //   return <Component route ={route} navigator = {navigator}/> ;
    // }

    render() {

        return (
            <Provider store={store}>
                <Main/>
            </Provider>
        );
    }
}

// <Login/>
// <Navigator
// style ={styles.container}
// initialRoute = {{name : 'login'}}
// renderScene= {this.renderScene}
// configureScene = { () => {return Navigator.SceneConfigs.FloatFromRight ;}}
//  />

AppRegistry.registerComponent('reactWithRedux', () => MyApp);
