import * as actions from './actionTypes';
import axios from 'axios';

import {Alert, AsyncStorage, NativeModules} from 'react-native';
import * as vars from '../libs/vars';

var Picture;
export default function savePicture(picture) {
    Picture = picture;
    return (dispatch) => {
        // const ReadImageData = NativeModules.ReadImageData;
        // // uri is link to asset-library://
        // console.log(Picture);
        // console.log("start converting");
        // ReadImageData.readImage(Picture, (imageBase64) => {
        //     console.log("BASE64 data is " + imageBase64);
        //     dispatch(pictureSuccess(imageBase64));
        // });
        // console.log("stop converting");
        dispatch(pictureSuccess(Picture));
    }
}
function pictureSuccess(data) {
    console.log("Picture is converted");
    return {type: actions.CAMERA_SUCCESS, picture: data}
}
