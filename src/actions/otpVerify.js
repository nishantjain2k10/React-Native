import * as actions from './actionTypes'
import axios from 'axios'
import {Alert, AsyncStorage} from 'react-native';
import * as vars from '../libs/vars';

var PhoneNumber;
var OTPCode;
var VerisToken;
export default function otpVerify(phoneNumber, otpCode, token) {
    PhoneNumber = phoneNumber;
    OTPCode = otpCode;
    VerisToken = token;

    return (dispatch) => {
        const endpoint = "api/v3/user/otp-verify/";
        const url = `${vars.BaseURL}${endpoint}`;
        console.log(url);
        const body = {
            contact: PhoneNumber,
            otp_code: OTPCode
        };
        console.log(body);
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": vars.VerisToken + " " + VerisToken
            }
        };
        console.log(config);
        axios.post(url, body, config).then(function(response) {
            console.log(response);
            dispatch(otpVerifySuccess(response.data))
        }).catch(function(error) {});
    }
}

function otpVerifySuccess(data) {
    console.log(data);
    return {type: actions.OTP_VERIFY, data: data}
}
