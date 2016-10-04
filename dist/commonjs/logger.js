'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logger = exports.Levels = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _consoleAppender = require('./console-appender');

var _consoleAppender2 = _interopRequireDefault(_consoleAppender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Levels = exports.Levels = {
  'NONE': 0,
  'ALL': 1,
  'TRACE': 2,
  'DEBUG': 3,
  'INFO': 4,
  'WARN': 5,
  'ERROR': 6
};

var Logger = exports.Logger = function () {
  function Logger(name, appender) {
    _classCallCheck(this, Logger);

    if (name === undefined) {
      name = 'DEFAULT';
    }

    if (!appender) {
      this._appender = _consoleAppender2.default;
    } else {
      this._appender = appender;
    }

    this.name = name;
    this._level = Levels.WARN;
    this._initLogger();
  }

  _createClass(Logger, [{
    key: '_initLogger',
    value: function _initLogger() {
      this.trace = this.isTrace ? this._appender.trace.bind(this._appender.binding, this._prefix) : this._noop;
      this.debug = this.isDebug ? this._appender.debug.bind(this._appender.binding, this._prefix) : this._noop;
      this.info = this.isInfo ? this._appender.info.bind(this._appender.binding, this._prefix) : this._noop;
      this.warn = this.isWarn ? this._appender.warn.bind(this._appender.binding, this._prefix) : this._noop;
      this.error = this.isError ? this._appender.error.bind(this._appender.binding, this._prefix) : this._noop;
    }
  }, {
    key: '_noop',
    value: function _noop() {}
  }, {
    key: 'name',
    set: function set(name) {
      if (name === undefined || name === null) {
        throw new Error('Name required!!!');
      }
      this._name = name;
      this._prefix = this._name.trim().length == 0 ? '' : '[' + this._name + ']';
      this._initLogger();
    },
    get: function get() {
      return this._name;
    }
  }, {
    key: 'appender',
    set: function set(appender) {
      if (!appender) {
        throw new Error('Appender required!!!');
      }
      this._appender = appender;
      this._initLogger();
    }
  }, {
    key: 'level',
    set: function set(level) {
      if (level >= Levels.NONE && level <= Levels.ERROR) {
        this._level = level;
        this._initLogger();
      } else {
        throw new Error('Invalid level: ' + level);
      }
    },
    get: function get() {
      return this._level;
    }
  }, {
    key: 'isNone',
    get: function get() {
      return this._level === Levels.NONE;
    }
  }, {
    key: 'isAll',
    get: function get() {
      return this._level === Levels.ALL;
    }
  }, {
    key: 'isTrace',
    get: function get() {
      return this._level > 0 && this._level <= Levels.TRACE;
    }
  }, {
    key: 'isDebug',
    get: function get() {
      return this._level > 0 && this._level <= Levels.DEBUG;
    }
  }, {
    key: 'isInfo',
    get: function get() {
      return this._level > 0 && this._level <= Levels.INFO;
    }
  }, {
    key: 'isWarn',
    get: function get() {
      return this._level > 0 && this._level <= Levels.WARN;
    }
  }, {
    key: 'isError',
    get: function get() {
      return this._level > 0 && this._level <= Levels.ERROR;
    }
  }]);

  return Logger;
}();

var logger = new Logger('');
exports.default = logger;