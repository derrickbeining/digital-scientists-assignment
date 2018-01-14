export function hasMediaDeviceAPI () {
  return Boolean(navigator.mediaDevices)
    && Boolean(navigator.mediaDevices.getUserMedia);
}

function generateConstraints() {
  const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
  if (supportedConstraints.hasOwnProperty('facingMode')) {
    return {video: { facingMode: 'environment' }};
  } else {
    return { video: true };
  }
}

export function startingCamera (video) {
  return navigator.mediaDevices
    .getUserMedia(generateConstraints())
    .then(mediaStream => {
      video.srcObject = mediaStream;
      video.onloadedmetadata = function(e) {
        video.play();
      };
    })
}
