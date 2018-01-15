export function hasMediaDeviceAPI () {
  return Boolean(navigator.mediaDevices)
    && Boolean(navigator.mediaDevices.getUserMedia);
}

function isMobileDevice () {
  return navigator.userAgent.search(/mobi/i) !== -1;
}

function generateConstraints(facingMode = 'environment') {
  const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
  if (isMobileDevice() && supportedConstraints.hasOwnProperty('facingMode')) {
    return {video: { facingMode: facingMode }};
  } else {
    return { video: true };
  }
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
