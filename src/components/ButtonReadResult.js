import Component from '../Component';
import CameraScreen from './CameraScreen';

const ButtonReadResult = new Component('ButtonReadResult', {
  result: 'You must take a picture first.'
});

function speakResult(result) {
  const utterance = new SpeechSynthesisUtterance(result)
  window.speechSynthesis.speak(utterance)
}

ButtonReadResult.on('click', function(evt) {
  speakResult(ButtonReadResult.getState().result);
})

export default ButtonReadResult;
