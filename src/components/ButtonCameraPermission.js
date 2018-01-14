import Component from '../Component';
import CameraScreen from './CameraScreen';

const ButtonCameraPermission = new Component('ButtonCameraPermission', {
  permitted: false
});

ButtonCameraPermission.on('click', function(evt) {
  CameraScreen.setState({show: true});
})

ButtonCameraPermission.render((state) => {
  console.log(state.permitted);

})

export default ButtonCameraPermission;
