import Component from '../Component';
import Error from './Error';
import {hasMediaDeviceAPI, startingCamera, stopCamera} from '../mediaDevice';

const CameraScreen = new Component('CameraScreen', {
  show: false,
  facingMode: 'environment'
})

CameraScreen.render((state) => {
  const {show, facingMode} = state;
  if (hasMediaDeviceAPI()) {

    if (show) {
      startingCamera(CameraScreen.dom, facingMode)
        .then(() => CameraScreen.addClass('util-visible'))
        .catch(err => Error.setState({message: `${err.name}: \n${err.message}`}))
    }

    else {
      stopCamera(CameraScreen.dom);
      CameraScreen.removeClass('util-visible');
    }
  }
})

export default CameraScreen;
