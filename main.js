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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasMediaDeviceAPI = hasMediaDeviceAPI;
exports.startingCamera = startingCamera;
function hasMediaDeviceAPI() {
  return Boolean(navigator.mediaDevices) && Boolean(navigator.mediaDevices.getUserMedia);
}

function generateConstraints() {
  var supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
  if (supportedConstraints.hasOwnProperty('facingMode')) {
    return { video: { facingMode: 'environment' } };
  } else {
    return { video: true };
  }
}

function startingCamera(video) {
  return navigator.mediaDevices.getUserMedia(generateConstraints()).then(function (mediaStream) {
    video.srcObject = mediaStream;
    video.onloadedmetadata = function (e) {
      video.play();
    };
  }).catch(function (err) {
    return console.warn(err.name + ': ' + err.message);
  });
}

/***/ }),
/* 1 */
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
      return this.dom.addEventListener(event, eventHandler);
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mediaDevice = __webpack_require__(0);

var _mediaDevice2 = _interopRequireDefault(_mediaDevice);

var _ButtonCameraPermission = __webpack_require__(3);

var _ButtonCameraPermission2 = _interopRequireDefault(_ButtonCameraPermission);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Component = __webpack_require__(1);

var _Component2 = _interopRequireDefault(_Component);

var _CameraScreen = __webpack_require__(4);

var _CameraScreen2 = _interopRequireDefault(_CameraScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonCameraPermission = new _Component2.default('ButtonCameraPermission', {
  permitted: false
});

ButtonCameraPermission.on('click', function (evt) {
  _CameraScreen2.default.setState({ show: true });
});

ButtonCameraPermission.render(function (state) {
  console.log(state.permitted);
});

exports.default = ButtonCameraPermission;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Component = __webpack_require__(1);

var _Component2 = _interopRequireDefault(_Component);

var _mediaDevice = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CameraScreen = new _Component2.default('CameraScreen', {
  show: false
});

CameraScreen.render(function (state) {
  if (CameraScreen.getState().show) {
    if ((0, _mediaDevice.hasMediaDeviceAPI)()) {
      (0, _mediaDevice.startingCamera)(CameraScreen.dom).then(function () {
        return CameraScreen.addClass('camera__screen--show');
      });
    }
  } else {
    CameraScreen.removeClass('camera__screen--show');
  }
});

exports.default = CameraScreen;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map