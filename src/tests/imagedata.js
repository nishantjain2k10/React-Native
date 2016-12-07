import React, {Component} from 'react';
import {View, Text, TouchableHighlight, NativeModules} from 'react-native';

//const uri = 'http://192.168.1.222:8005/media/settings/Veris_Combined_Gradient_fit.png';
//const uri = '/Users/PriyaKaushik/Library/Developer/CoreSimulator/Devices/9DB433FF-D3DB-42D5-AA86-79932B0E8B3E/data/Containers/Data/Application/8338791B-9724-46BF-AD6C-6FFD3EA053D6/Documents/F059E4DA-8387-49B7-B8DF-9D1D523B739E.jpg';
const uri = 'assets-library://asset/asset.JPG?id=C293DB48-1AED-457E-B7CD-F28CD5F4739A&ext=JPG';
export default class ImageData extends Component {
    render()
    {
        return (

            <TouchableHighlight style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'green'
            }} onPress={this.convert.bind(this)}>
                <Text style ={{
                    fontSize: 20
                }}>Convert</Text>
            </TouchableHighlight>

        );
    }

    convert()
    {

        console.log(uri);
        NativeModules.RNImageToBase64.getBase64String(uri, (err, base64) => {
            console.log("BASE64 data is " + base64);
            console.log("got image data");
        })

        // const ReadImageData = NativeModules.ReadImageData;
        // // uri is link to asset-library://
        // console.log(uri);
        // console.log("start converting");
        // ReadImageData.readImage(uri, (imageBase64) => {
        // console.log("BASE64 data is " + imageBase64);
        // console.log("got image data");
        // });
        // console.log("stop converting");
    }
}
