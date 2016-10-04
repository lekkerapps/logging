define(['exports', './console-appender'], function (exports, _consoleAppender) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Logger = exports.Levels = undefined;

  var _consoleAppender2 = _interopRequireDefault(_consoleAppender);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const Levels = exports.Levels = {
    'NONE': 0,
    'ALL': 1,
    'TRACE': 2,
    'DEBUG': 3,
    'INFO': 4,
    'WARN': 5,
    'ERROR': 6
  };

  class Logger {
    constructor(name, appender) {
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

    _initLogger() {
      this.trace = this.isTrace ? this._appender.trace.bind(this._appender.binding, this._prefix) : this._noop;
      this.debug = this.isDebug ? this._appender.debug.bind(this._appender.binding, this._prefix) : this._noop;
      this.info = this.isInfo ? this._appender.info.bind(this._appender.binding, this._prefix) : this._noop;
      this.warn = this.isWarn ? this._appender.warn.bind(this._appender.binding, this._prefix) : this._noop;
      this.error = this.isError ? this._appender.error.bind(this._appender.binding, this._prefix) : this._noop;
    }

    _noop() {}

    set name(name) {
      if (name === undefined || name === null) {
        throw new Error('Name required!!!');
      }
      this._name = name;
      this._prefix = this._name.trim().length == 0 ? '' : `[${ this._name }]`;
      this._initLogger();
    }

    get name() {
      return this._name;
    }

    set appender(appender) {
      if (!appender) {
        throw new Error('Appender required!!!');
      }
      this._appender = appender;
      this._initLogger();
    }

    set level(level) {
      if (level >= Levels.NONE && level <= Levels.ERROR) {
        this._level = level;
        this._initLogger();
      } else {
        throw new Error('Invalid level: ' + level);
      }
    }

    get level() {
      return this._level;
    }

    get isNone() {
      return this._level === Levels.NONE;
    }

    get isAll() {
      return this._level === Levels.ALL;
    }

    get isTrace() {
      return this._level > 0 && this._level <= Levels.TRACE;
    }

    get isDebug() {
      return this._level > 0 && this._level <= Levels.DEBUG;
    }

    get isInfo() {
      return this._level > 0 && this._level <= Levels.INFO;
    }

    get isWarn() {
      return this._level > 0 && this._level <= Levels.WARN;
    }

    get isError() {
      return this._level > 0 && this._level <= Levels.ERROR;
    }
  }

  exports.Logger = Logger;
  let logger = new Logger('');
  exports.default = logger;
});