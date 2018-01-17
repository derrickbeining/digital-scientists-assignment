import Component from '../Component';
import CameraScreen from './CameraScreen';

const ButtonReadResult = new Component('ButtonReadResult', {
  result: ''
});

function speakResult(result) {
  const utterance = new SpeechSynthesisUtterance(result)
  window.speechSynthesis.speak(utterance)
}

ButtonReadResult.on('click', function(evt) {
  speakResult(ButtonReadResult.getState().result);
  ButtonReadResult.setState({result: ''});
})

ButtonReadResult.render(state => {
  if (ButtonReadResult.getState().result) {
    ButtonReadResult.removeClass('util-invisible');
  } else {
    ButtonReadResult.addClass('util-invisible');
  }
})

export default ButtonReadResult;
