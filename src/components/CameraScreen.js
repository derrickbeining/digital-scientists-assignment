import Component from '../Component';
import {hasMediaDeviceAPI, startingCamera} from '../mediaDevice';

const CameraScreen = new Component('CameraScreen', {
  show: false
})

CameraScreen.render((state) => {
  if (CameraScreen.getState().show) {
    if (hasMediaDeviceAPI()) {
      startingCamera(CameraScreen.dom)
        .then(() => CameraScreen.addClass('camera__screen--show'))
    }

  } else {
    CameraScreen.removeClass('camera__screen--show');
  }
})

export default CameraScreen;
