import Component from '../Component';
import Canvas from './Canvas';
import CameraScreen from './CameraScreen';

const ButtonCameraCapture = new Component('ButtonCameraCapture');

function sendImageForAnalysis(imageData) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return fetch('https://young-mountain-88984.herokuapp.com/image-vision', {
    method: 'POST',
    headers: headers,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify({ image: imageData }),
  })
  .then(res => res.json())
  .then(data => data.labelAnnotations[0].description)
  .catch(err => console.log('Error: ', err));
}

function speakResult(result) {
  const utterance = new SpeechSynthesisUtterance(result)
  window.speechSynthesis.speak(utterance)
}

const fileReader = new FileReader();

fileReader.addEventListener('loadend', function() {
  sendImageForAnalysis(fileReader.result)
  .then(result => speakResult(result));
})

ButtonCameraCapture.on('click', function takePicture() {
  Canvas.takePicture(CameraScreen.dom)
  .then(imageBlob => {
    fileReader.readAsDataURL(imageBlob);
  });
})
