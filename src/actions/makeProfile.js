import * as actions from './actionTypes';
import axios from 'axios';
import {Alert, AsyncStorage} from 'react-native';

import * as vars from '../libs/vars';

var firstName;
var lastName;
var pictureData;
var pin;
var verisToken;
export default function makeProfile(firstName, lastName, pin, pictureData, token) {
    firstName = firstName
    lastName = lastName
    pin = pin
    pictureData = pictureData
    verisToken = token

    return (dispatch) => {
        const endpoint = "api/v3/user/profile/";
        const url = `${vars.BaseURL}${endpoint}`;
        console.log(url);
        let photo = {
            uri: pictureData,
            type: 'image/jpg',
            name: 'photo.jpg'
        };
        let body = new FormData();
        body.append('first_name', firstName);
        body.append('last_name', lastName);
        body.append('password', pin)
        body.append('profile_picture', photo);
        // const body = {
        //     first_name: firstName,
        //     last_name: lastName,
        //     password: pin,
        //     profile_picture: pictureData
        // };
        //"Content-Type" : "multipart/form-data",
        console.log(body);
        const config = {
            headers: {

                "Authorization": vars.VerisToken + " " + verisToken
            }
        };
        console.log(config);
        axios.put(url, body, config).then(function(response) {
            console.log(response);
            dispatch(profileSuccess(response.data))
        }).catch(function(error) {
            console.log(error);
        });
    }
}

function profileSuccess(data) {
    console.log("Profile uploaded");
    console.log(data);
    return {type: actions.PROFILE_SUCCESS, data: data}
}
