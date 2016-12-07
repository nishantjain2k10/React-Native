import React, {Component} from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Alert
} from 'react-native';
import Camera from 'react-native-camera';
import {connect} from 'react-redux';
import cameraAction from '../actions/cameraAction'

var URL = "ninja";

function mapStateToProps(state) {
    return {profilePicture: state.cameraReducer}
}
class CameraHandle extends Component {

    constructor(props)
    {
        super(props);

    }

    takePicture() {
        this.camera.capture().then((data) => {
            console.log(data)
            console.log(URL);
            Alert.alert(data.path)
            URL = data.path;
            console.log("URL is " + URL);
            this.props.dispatch(cameraAction(URL));

        }).catch(err => console.error(err));

    }

    render() {
        console.log("lets open the camera");
        return (
            <View style={styles.container}>
                <Camera ref={(cam) => {
                    this.camera = cam;
                }} style={styles.preview} aspect={Camera.constants.Aspect.fill} captureTarget={Camera.constants.CaptureTarget.disk} type={Camera.constants.Type.front}>
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>CAPTURE</Text>
                </Camera>
            </View>
        );
    }

    componentWillReceiveProps(nextProps)
    {
        console.log("Enjoy guys");
        console.log(URL);
        this.props.navigator.replace({name: 'registerProfile'});
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});
export default connect(mapStateToProps)(CameraHandle);
