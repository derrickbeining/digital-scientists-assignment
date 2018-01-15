import CameraScreen from './components/CameraScreen';

export function hasMediaDeviceAPI () {
  return Boolean(navigator.mediaDevices)
    && Boolean(navigator.mediaDevices.getUserMedia);
}

function isMobileDevice () {
  return navigator.userAgent.search(/mobi/i) !== -1;
}

function generateConstraints(facingMode = 'environment') {
  const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
  const constraints = {
    width: CameraScreen.dom.offsetWidth,
    aspectRatio: 1
  }

  if (isMobileDevice() && supportedConstraints.hasOwnProperty('facingMode')) {
    constraints.video = { facingMode: facingMode };
  } else {
    constraints.video = true;
  }

  return constraints;
}

export function startingCamera (video, facingMode = 'environment') {
  return navigator.mediaDevices
    .getUserMedia(generateConstraints(facingMode))
    .then(mediaStream => {
      video.srcObject = mediaStream;
      video.play();
    })
}

export function stopCamera (video) {
  video.srcObject = null;
}
