import Component from '../Component';
import Error from './Error';
import {hasMediaDeviceAPI, startingCamera} from '../mediaDevice';

const CameraScreen = new Component('CameraScreen', {
  show: false
})

CameraScreen.render((state) => {
  if (CameraScreen.getState().show) {
    if (hasMediaDeviceAPI()) {
      startingCamera(CameraScreen.dom)
        .then(() => CameraScreen.addClass('camera__screen--show'))
        .catch(err => Error.setState({message: `${err.name}: \n${err.message}`}))
    }

  } else {
    CameraScreen.removeClass('camera__screen--show');
  }
})

export default CameraScreen;
