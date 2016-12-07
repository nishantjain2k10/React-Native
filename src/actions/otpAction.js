import * as actions from './actionTypes';
import axios from 'axios';
import {Alert, AsyncStorage} from 'react-native';

import * as vars from '../libs/vars';

var PhoneNumber
export default function otpVerify(phoneNumber) {
    PhoneNumber = phoneNumber;

    return (dispatch) => {
        const endpoint = "api/v3/user/signup/";
        const url = `${vars.BaseURL}${endpoint}`;
        console.log(url);
        const body = {
            contact: phoneNumber,
            module: "54beb728-a643-4404-9083-1efb29b32856",
            device_name: "Moto",
            device_os: "android",
            registration_id: "656528916652652"
        };
        console.log(body);
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        console.log(config);
        axios.post(url, body, config).then(function(response) {
            console.log(response);
            dispatch(otpSendSuccess(response.data))
        }).catch(function(error) {
            dispatch(loginFailed(error));
        });
    }
}

function otpSendSuccess(data) {
    return {type: actions.OTP_SUCCESS, phoneNumber: PhoneNumber, verisToken: data.veristoken}
}
