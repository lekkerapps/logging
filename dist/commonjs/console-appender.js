"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConsoleAppender = exports.ConsoleAppender = function () {
  function ConsoleAppender() {
    _classCallCheck(this, ConsoleAppender);
  }

  _createClass(ConsoleAppender, [{
    key: "trace",
    get: function get() {
      return console.trace || console.log;
    }
  }, {
    key: "debug",
    get: function get() {
      return console.debug || console.log;
    }
  }, {
    key: "info",
    get: function get() {
      return console.info || console.log;
    }
  }, {
    key: "warn",
    get: function get() {
      return console.warn || console.log;
    }
  }, {
    key: "error",
    get: function get() {
      return console.error || console.log;
    }
  }, {
    key: "binding",
    get: function get() {
      return console;
    }
  }]);

  return ConsoleAppender;
}();

var appender = new ConsoleAppender();
exports.default = appender;