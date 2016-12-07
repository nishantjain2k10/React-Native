import * as actions from './actionTypes'
import axios from 'axios'
import {Alert, AsyncStorage} from 'react-native'

import * as vars from '../libs/vars'

var USERNAME
var PASSWORD
var organizationName
var organizationLogo
export default function login(username, password) {
    USERNAME = username
    PASSWORD = password
    return (dispatch) => {
        const endpoint = "api/v3/gatekeeper-login/"
        const url = `${vars.BaseURL}${endpoint}`
        console.log(url)
        const body = {
            username: USERNAME,
            password: PASSWORD,
            module: "54beb728-a643-4404-9083-1efb29b32856",
            device_name: "Moto",
            device_os: "android",
            registration_id: "656528916652652"
        };
        console.log(body)
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        console.log(config)
        axios.post(url, body, config).then(function(response) {
            console.log(response)
            const Id = response.data.id;
            const Token = response.data.veristoken;
            organizationName = response.data.organization_name;
            organizationLogo = response.data.organization_logo;
            const endpoint = "api/v3/terminal/" + Id + "/screen/";
            const url = `${vars.BaseURL}${endpoint}`;
            console.log(url)
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": vars.GateKeeper + " " + Token
                }
            };
            axios.get(url, config).then(function(response) {
                console.log(response)
                dispatch(loginSuccess(response.data))
            }).catch(function(error) {
                console.log(error);
            });
        }).catch(function(error) {
            dispatch(loginFailed(error))
        });
    }
}

function loginSuccess(data) {
    return {
        type: actions.LOGIN_SUCCESS,
        data: data,
        organizationName: organizationName,
        organizationLogo: organizationLogo,
        username: USERNAME,
        passwd: PASSWORD,
        isLoggedIn: true
    }
}

function loginFailed(error) {
    console.log("Call at LOGIN_ERROR")
    return {
        type: actions.LOGIN_ERROR,
        data: error,
        username: USERNAME,
        passwd: PASSWORD,
        isLoggedIn: false,
        loginFailed: true
    }
}
