import Component from '../Component';
import CameraScreen from './CameraScreen';

const ButtonCameraFacing = new Component('ButtonCameraFacing');

ButtonCameraFacing.on('click', function(evt) {
  if (CameraScreen.getState().facingMode === 'user') {
    CameraScreen.setState({facingMode: 'environment'});
    ButtonCameraFacing.dom.textContent = 'Use Front';
  } else {
    CameraScreen.setState({facingMode: 'user'});
    ButtonCameraFacing.dom.textContent = 'Use Rear';
  }
})

export default ButtonCameraFacing;
