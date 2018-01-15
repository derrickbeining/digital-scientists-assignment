import Component from '../Component';
import CameraScreen from './CameraScreen';

const ButtonCameraFacing = new Component('ButtonCameraFacing');

ButtonCameraFacing.on('click', function(evt) {
  console.log('clicked')
  if (CameraScreen.getState().facingMode === 'user') {
    CameraScreen.setState({facingMode: 'environment'});
    ButtonCameraFacing.dom.textContent = 'Switch to Front';
  } else {
    CameraScreen.setState({facingMode: 'user'});
    ButtonCameraFacing.dom.textContent = 'Switch to Rear';
  }
})

export default ButtonCameraFacing;
