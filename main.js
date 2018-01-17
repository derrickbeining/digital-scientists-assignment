/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function merge(one, two) {
  return Object.assign({}, one, two);
}

var Component = function () {
  function Component(id) {
    var _this = this;

    var defaultState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Component);

    var state = defaultState;

    var getState = function getState() {
      return state;
    };

    var setState = function setState(arg) {
      if (typeof arg === 'function') {
        setState(arg(getState()));
      } else {
        state = merge(state, arg);
        _this.renderer(getState());
      }
    };

    this.dom = document.getElementById(id);
    this.getState = getState;
    this.setState = setState;
    this.renderer = function noop() {};
  }

  _createClass(Component, [{
    key: 'addClass',
    value: function addClass(classname) {
      this.dom.classList.add(classname);
    }
  }, {
    key: 'removeClass',
    value: function removeClass(classname) {
      this.dom.classList.remove(classname);
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass(classname) {
      this.dom.classList.toggle(classname);
    }
  }, {
    key: 'on',
    value: function on(event, eventHandler) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      return this.dom.addEventListener(event, eventHandler, options);
    }
  }, {
    key: 'render',
    value: function render(fn) {
      this.renderer = fn;
      fn(this.getState());
    }
  }]);

  return Component;
}();

exports.default = Component;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Component = __webpack_require__(0);

var _Component2 = _interopRequireDefault(_Component);

var _Error = __webpack_require__(7);

var _Error2 = _interopRequireDefault(_Error);

var _mediaDevice = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CameraScreen = new _Component2.default('CameraScreen', {
  show: false,
  facingMode: 'environment'
});

CameraScreen.render(function (state) {
  var show = state.show,
      facingMode = state.facingMode;

  if ((0, _mediaDevice.hasMediaDeviceAPI)()) {

    if (show) {
      (0, _mediaDevice.startingCamera)(CameraScreen.dom, facingMode).then(function () {
        return CameraScreen.addClass('camera__screen--show');
      }).catch(function (err) {
        return _Error2.default.setState({ message: err.name + ': \n' + err.message });
      });
    } else {
      (0, _mediaDevice.stopCamera)(CameraScreen.dom);
      CameraScreen.removeClass('camera__screen--show');
    }
  }
});

exports.default = CameraScreen;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Component = __webpack_require__(0);

var _Component2 = _interopRequireDefault(_Component);

var _CameraScreen = __webpack_require__(1);

var _CameraScreen2 = _interopRequireDefault(_CameraScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Canvas = new _Component2.default('Canvas');

Canvas.clearPhoto = function clearPhoto() {
  // application/octet-stream
  var ctx = this.dom.getContext('2d');
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, this.dom.width, this.dom.height);
};

Canvas.takePicture = function takePicture(cameraScreen) {
  var ctx = this.dom.getContext('2d');
  this.dom.height = cameraScreen.offsetHeight;
  this.dom.width = cameraScreen.offsetWidth;
  ctx.drawImage(cameraScreen, 0, 0, this.dom.width, this.dom.height);

  return new Promise(function (fulfillWith) {
    Canvas.dom.toBlob(function (blob) {
      fulfillWith(blob);
    });
  });
};

exports.default = Canvas;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Component = __webpack_require__(0);

var _Component2 = _interopRequireDefault(_Component);

var _CameraScreen = __webpack_require__(1);

var _CameraScreen2 = _interopRequireDefault(_CameraScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonReadResult = new _Component2.default('ButtonReadResult', {
  result: 'You must take a picture first.'
});

function speakResult(result) {
  var utterance = new SpeechSynthesisUtterance(result);
  window.speechSynthesis.speak(utterance);
}

ButtonReadResult.on('click', function (evt) {
  speakResult(ButtonReadResult.getState().result);
});

exports.default = ButtonReadResult;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ButtonCameraPower = __webpack_require__(6);

var _ButtonCameraPower2 = _interopRequireDefault(_ButtonCameraPower);

var _ButtonCameraFacing = __webpack_require__(9);

var _ButtonCameraFacing2 = _interopRequireDefault(_ButtonCameraFacing);

var _ButtonCameraCapture = __webpack_require__(10);

var _ButtonCameraCapture2 = _interopRequireDefault(_ButtonCameraCapture);

var _ButtonReadResult = __webpack_require__(3);

var _ButtonReadResult2 = _interopRequireDefault(_ButtonReadResult);

var _Canvas = __webpack_require__(2);

var _Canvas2 = _interopRequireDefault(_Canvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Component = __webpack_require__(0);

var _Component2 = _interopRequireDefault(_Component);

var _CameraScreen = __webpack_require__(1);

var _CameraScreen2 = _interopRequireDefault(_CameraScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonCameraPower = new _Component2.default('ButtonCameraPower');

ButtonCameraPower.on('click', function (evt) {
  if (_CameraScreen2.default.getState().show) {
    _CameraScreen2.default.setState({ show: false });
    ButtonCameraPower.dom.textContent = 'On';
  } else {
    _CameraScreen2.default.setState({ show: true });
    ButtonCameraPower.dom.textContent = 'Off';
  }
});

exports.default = ButtonCameraPower;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Component = __webpack_require__(0);

var _Component2 = _interopRequireDefault(_Component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = new _Component2.default('Error', {
  message: ''
});

Error.render(function (state) {
  Error.dom.textContent = state.message;
});

exports.default = Error;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasMediaDeviceAPI = hasMediaDeviceAPI;
exports.startingCamera = startingCamera;
exports.stopCamera = stopCamera;

var _CameraScreen = __webpack_require__(1);

var _CameraScreen2 = _interopRequireDefault(_CameraScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasMediaDeviceAPI() {
  return Boolean(navigator.mediaDevices) && Boolean(navigator.mediaDevices.getUserMedia);
}

function isMobileDevice() {
  return navigator.userAgent.search(/mobi/i) !== -1;
}

function generateConstraints() {
  var facingMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'environment';

  var supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
  var constraints = {
    width: _CameraScreen2.default.dom.offsetWidth,
    height: _CameraScreen2.default.dom.offsetWidth,
    aspectRatio: 1
  };

  if (isMobileDevice() && supportedConstraints.hasOwnProperty('facingMode')) {
    constraints.video = { facingMode: facingMode };
  } else {
    constraints.video = true;
  }

  return constraints;
}

function startingCamera(video) {
  var facingMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'environment';

  return navigator.mediaDevices.getUserMedia(generateConstraints(facingMode)).then(function (mediaStream) {
    video.srcObject = mediaStream;
    video.play();
  });
}

function stopCamera(video) {
  video.srcObject = null;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Component = __webpack_require__(0);

var _Component2 = _interopRequireDefault(_Component);

var _CameraScreen = __webpack_require__(1);

var _CameraScreen2 = _interopRequireDefault(_CameraScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonCameraFacing = new _Component2.default('ButtonCameraFacing');

ButtonCameraFacing.on('click', function (evt) {
  console.log('clicked');
  if (_CameraScreen2.default.getState().facingMode === 'user') {
    _CameraScreen2.default.setState({ facingMode: 'environment' });
    ButtonCameraFacing.dom.textContent = 'Switch to Front';
  } else {
    _CameraScreen2.default.setState({ facingMode: 'user' });
    ButtonCameraFacing.dom.textContent = 'Switch to Rear';
  }
});

exports.default = ButtonCameraFacing;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Component = __webpack_require__(0);

var _Component2 = _interopRequireDefault(_Component);

var _Canvas = __webpack_require__(2);

var _Canvas2 = _interopRequireDefault(_Canvas);

var _CameraScreen = __webpack_require__(1);

var _CameraScreen2 = _interopRequireDefault(_CameraScreen);

var _ButtonReadResult = __webpack_require__(3);

var _ButtonReadResult2 = _interopRequireDefault(_ButtonReadResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonCameraCapture = new _Component2.default('ButtonCameraCapture');

function sendImageForAnalysis(imageData) {
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return fetch('https://young-mountain-88984.herokuapp.com/image-vision', {
    method: 'POST',
    headers: headers,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify({ image: imageData })
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    return data.labelAnnotations[0].description;
  }).catch(function (err) {
    return console.log('Error: ', err);
  });
}

var fileReader = new FileReader();

fileReader.addEventListener('loadend', function () {
  sendImageForAnalysis(fileReader.result).then(function (result) {
    return _ButtonReadResult2.default.setState({ result: result });
  });
});

ButtonCameraCapture.on('click', function takePicture() {
  _Canvas2.default.takePicture(_CameraScreen2.default.dom).then(function (imageBlob) {
    fileReader.readAsDataURL(imageBlob);
  });
});

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map