import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Navigator} from 'react-native';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {applyMiddleware} from 'redux';
const loggerMiddleware = createLogger();

import Main from './src/components/main';
import MenuDemo from './src/tests/menuDemo';
import ExampleMenuDemo from './src/tests/menuExample'
import ExampleCamera from './src/tests/exampleCamera';
import ImageData from './src/tests/imagedata';
import AutoCompleteInput from './src/tests/autoCompleteInput';
import ScreenButton from './src/tests/screenButton';

import Buttons from './src/tests/buttons';

import userReducers from './src/reducers/user'; // take all if more than one
import otpActionReducer from './src/reducers/otpAction';
import otpVerifyReducer from './src/reducers/otpVerify';
import cameraReducer from './src/reducers/cameraReducer'
import makeProfileReducer from './src/reducers/makeProfileReducer'

import {createStore, combineReducers, compose} from 'redux';

import {Provider} from 'react-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({userReducers, otpActionReducer, otpVerifyReducer, cameraReducer, makeProfileReducer}), {}, composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)));

const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware);
//let store = createStore(combineReducers({userReducers,otpActionReducer,otpVerifyReducer,cameraReducer,makeProfileReducer}), {} ,compose(middleware,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
//let store createStore(combineReducers({userReducers,otpActionReducer,otpVerifyReducer}),middleware);

store.subscribe(() => console.log(store.getState()))

class MyApp extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <Provider store={store}>
                <ScreenButton/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('reactWithRedux', () => MyApp);
