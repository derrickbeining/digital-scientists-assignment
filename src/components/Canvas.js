import Component from '../Component';
import CameraScreen from './CameraScreen';

const Canvas = new Component('Canvas');



Canvas.clearPhoto = function clearPhoto() {
  // application/octet-stream
  const ctx = this.dom.getContext('2d');
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, this.dom.width, this.dom.height);
}

Canvas.takePicture = function takePicture(cameraScreen) {
  const ctx = this.dom.getContext('2d');
  this.dom.height = cameraScreen.offsetHeight;
  this.dom.width = cameraScreen.offsetWidth;
  ctx.drawImage(cameraScreen, 0, 0, this.dom.width, this.dom.height);

  return new Promise(fulfillWith => {
    Canvas.dom.toBlob(function(blob) {
      fulfillWith(blob)
    });
  })

}

export default Canvas;
