import Component from '../Component';
import CameraScreen from './CameraScreen';

const ButtonCameraPower = new Component('ButtonCameraPower');

ButtonCameraPower.on('click', function(evt) {
  if (CameraScreen.getState().show) {
    CameraScreen.setState({show: false});
    ButtonCameraPower.dom.textContent = 'On';
  } else {
    CameraScreen.setState({show: true});
    ButtonCameraPower.dom.textContent = 'Off';
  }
})

export default ButtonCameraPower;
