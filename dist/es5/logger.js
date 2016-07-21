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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

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
        // No appender, default to Console Appender
        this._appender = _consoleAppender2.default;
      } else {
        this._appender = appender;
      }

      this._name = name;
      this._prefix = '[' + this._name + ']';
      this._level = Levels.WARN;
      this._initLogger();
    }

    _createClass(Logger, [{
      key: '_initLogger',
      value: function _initLogger() {
        // this.fine = this.isFine() ? window.console.log.bind(window.console, '%c%s', 'color: #757575; font-size: 10px;') : this._noop;
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

      /**
       * Set the current logging level
       *
       * @param {Levels.value} level - The level to set for logging
       */

    }, {
      key: 'level',
      set: function set(level) {
        if (level >= Levels.NONE && level <= Levels.ERROR) {
          this._level = level;
          this._initLogger();
        } else {
          throw new Error('Invalid level: ' + level);
        }
      }

      /**
       * Retrieves the current logging level
       *
       * @return Logging level
       */
      ,
      get: function get() {
        return this._level;
      }

      /**
       * Retrieves whether the current logging level is NONE
       *
       * @readonly
       * @return true if the current logging level is Levels.NONE, false otherwise
       */

    }, {
      key: 'isNone',
      get: function get() {
        return this._level === Levels.NONE;
      }

      /**
       * Retrieves whether the current logging level is ALL
       *
       * @readonly
       * @return true if the current logging level is Levels.ALL, false otherwise
       */

    }, {
      key: 'isAll',
      get: function get() {
        return this._level === Levels.ALL;
      }

      /**
       * Retrieves whether the current logging level is TRACE
       *
       * @readonly
       * @return true if the current logging level is Levels.TRACE, false otherwise
       */

    }, {
      key: 'isTrace',
      get: function get() {
        return this._level > 0 && this._level <= Levels.TRACE;
      }

      /**
       * Retrieves whether the current logging level is TRACE
       *
       * @readonly
       * @return true if the current logging level is Levels.TRACE, false otherwise
       */

    }, {
      key: 'isDebug',
      get: function get() {
        return this._level > 0 && this._level <= Levels.DEBUG;
      }

      /**
       * Retrieves whether the current logging level is INFO
       *
       * @readonly
       * @return true if the current logging level is Levels.INFO, false otherwise
       */

    }, {
      key: 'isInfo',
      get: function get() {
        return this._level > 0 && this._level <= Levels.INFO;
      }

      /**
       * Retrieves whether the current logging level is WARN
       *
       * @readonly
       * @return true if the current logging level is Levels.WARN, false otherwise
       */

    }, {
      key: 'isWarn',
      get: function get() {
        return this._level > 0 && this._level <= Levels.WARN;
      }

      /**
       * Retrieves whether the current logging level is ERROR
       *
       * @readonly
       * @return true if the current logging level is Levels.ERROR, false otherwise
       */

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
});
//# sourceMappingURL=data:application/json;base64,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S0FBSyxNQUFMLEdBQWMsQ0FBZCxJQUFtQixLQUFLLE1BQUwsSUFBZSxPQUFPLEtBQWhEO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzswQkFNYztBQUNaLGVBQU8sS0FBSyxNQUFMLEdBQWMsQ0FBZCxJQUFtQixLQUFLLE1BQUwsSUFBZSxPQUFPLEtBQWhEO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzswQkFNYTtBQUNYLGVBQU8sS0FBSyxNQUFMLEdBQWMsQ0FBZCxJQUFtQixLQUFLLE1BQUwsSUFBZSxPQUFPLElBQWhEO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzswQkFNYTtBQUNYLGVBQU8sS0FBSyxNQUFMLEdBQWMsQ0FBZCxJQUFtQixLQUFLLE1BQUwsSUFBZSxPQUFPLElBQWhEO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzswQkFNYztBQUNaLGVBQU8sS0FBSyxNQUFMLEdBQWMsQ0FBZCxJQUFtQixLQUFLLE1BQUwsSUFBZSxPQUFPLEtBQWhEO0FBQ0Q7Ozs7OztBQUdILE1BQUksU0FBUyxJQUFJLE1BQUosQ0FBVyxFQUFYLENBQWI7b0JBQ2UsTSIsImZpbGUiOiJsb2dnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFByb2plY3Q6IExla2tlckFwcHMgLSBMb2dnaW5nXG4gKiBDb3B5cmlnaHQgMjAxNiBBc2hsZXkgRyBSYW1kYXNzIDxhZ3JhbWRhc3NAZ21haWwuY29tPlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IENvbnNvbGVBcHBlbmRlciBmcm9tICcuL2NvbnNvbGUtYXBwZW5kZXInO1xuXG5leHBvcnQgY29uc3QgTGV2ZWxzID0ge1xuICAnTk9ORSc6IDAsXG4gICdBTEwnOiAxLFxuICAnVFJBQ0UnOiAyLFxuICAnREVCVUcnOiAzLFxuICAnSU5GTyc6IDQsXG4gICdXQVJOJzogNSxcbiAgJ0VSUk9SJzogNlxufTtcblxuZXhwb3J0IGNsYXNzIExvZ2dlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFwcGVuZGVyKSB7XG4gICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbmFtZSA9ICdERUZBVUxUJztcbiAgICB9XG5cbiAgICBpZiAoIWFwcGVuZGVyKSB7XG4gICAgICAvLyBObyBhcHBlbmRlciwgZGVmYXVsdCB0byBDb25zb2xlIEFwcGVuZGVyXG4gICAgICB0aGlzLl9hcHBlbmRlciA9IENvbnNvbGVBcHBlbmRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXBwZW5kZXIgPSBhcHBlbmRlcjtcbiAgICB9XG5cbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9wcmVmaXggPSAnWycgKyB0aGlzLl9uYW1lICsgJ10nO1xuICAgIHRoaXMuX2xldmVsID0gTGV2ZWxzLldBUk47XG4gICAgdGhpcy5faW5pdExvZ2dlcigpO1xuICB9XG5cbiAgX2luaXRMb2dnZXIoKSB7XG4gICAgLy8gdGhpcy5maW5lID0gdGhpcy5pc0ZpbmUoKSA/IHdpbmRvdy5jb25zb2xlLmxvZy5iaW5kKHdpbmRvdy5jb25zb2xlLCAnJWMlcycsICdjb2xvcjogIzc1NzU3NTsgZm9udC1zaXplOiAxMHB4OycpIDogdGhpcy5fbm9vcDtcbiAgICB0aGlzLnRyYWNlID0gdGhpcy5pc1RyYWNlID8gdGhpcy5fYXBwZW5kZXIudHJhY2UuYmluZCh0aGlzLl9hcHBlbmRlci5iaW5kaW5nLCB0aGlzLl9wcmVmaXgpIDogdGhpcy5fbm9vcDtcbiAgICB0aGlzLmRlYnVnID0gdGhpcy5pc0RlYnVnID8gdGhpcy5fYXBwZW5kZXIuZGVidWcuYmluZCh0aGlzLl9hcHBlbmRlci5iaW5kaW5nLCB0aGlzLl9wcmVmaXgpIDogdGhpcy5fbm9vcDtcbiAgICB0aGlzLmluZm8gPSB0aGlzLmlzSW5mbyA/IHRoaXMuX2FwcGVuZGVyLmluZm8uYmluZCh0aGlzLl9hcHBlbmRlci5iaW5kaW5nLCB0aGlzLl9wcmVmaXgpIDogdGhpcy5fbm9vcDtcbiAgICB0aGlzLndhcm4gPSB0aGlzLmlzV2FybiA/IHRoaXMuX2FwcGVuZGVyLndhcm4uYmluZCh0aGlzLl9hcHBlbmRlci5iaW5kaW5nLCB0aGlzLl9wcmVmaXgpIDogdGhpcy5fbm9vcDtcbiAgICB0aGlzLmVycm9yID0gdGhpcy5pc0Vycm9yID8gdGhpcy5fYXBwZW5kZXIuZXJyb3IuYmluZCh0aGlzLl9hcHBlbmRlci5iaW5kaW5nLCB0aGlzLl9wcmVmaXgpIDogdGhpcy5fbm9vcDtcbiAgfVxuXG4gIF9ub29wKCkgeyB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBzZXQgYXBwZW5kZXIoYXBwZW5kZXIpIHtcbiAgICBpZiAoIWFwcGVuZGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FwcGVuZGVyIHJlcXVpcmVkISEhJyk7XG4gICAgfVxuICAgIHRoaXMuX2FwcGVuZGVyID0gYXBwZW5kZXI7XG4gICAgdGhpcy5faW5pdExvZ2dlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgY3VycmVudCBsb2dnaW5nIGxldmVsXG4gICAqXG4gICAqIEBwYXJhbSB7TGV2ZWxzLnZhbHVlfSBsZXZlbCAtIFRoZSBsZXZlbCB0byBzZXQgZm9yIGxvZ2dpbmdcbiAgICovXG4gIHNldCBsZXZlbChsZXZlbCkge1xuICAgIGlmIChsZXZlbCA+PSBMZXZlbHMuTk9ORSAmJiBsZXZlbCA8PSBMZXZlbHMuRVJST1IpIHtcbiAgICAgIHRoaXMuX2xldmVsID0gbGV2ZWw7XG4gICAgICB0aGlzLl9pbml0TG9nZ2VyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBsZXZlbDogJyArIGxldmVsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjdXJyZW50IGxvZ2dpbmcgbGV2ZWxcbiAgICpcbiAgICogQHJldHVybiBMb2dnaW5nIGxldmVsXG4gICAqL1xuICBnZXQgbGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xldmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB3aGV0aGVyIHRoZSBjdXJyZW50IGxvZ2dpbmcgbGV2ZWwgaXMgTk9ORVxuICAgKlxuICAgKiBAcmVhZG9ubHlcbiAgICogQHJldHVybiB0cnVlIGlmIHRoZSBjdXJyZW50IGxvZ2dpbmcgbGV2ZWwgaXMgTGV2ZWxzLk5PTkUsIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAgZ2V0IGlzTm9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGV2ZWwgPT09IExldmVscy5OT05FO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB3aGV0aGVyIHRoZSBjdXJyZW50IGxvZ2dpbmcgbGV2ZWwgaXMgQUxMXG4gICAqXG4gICAqIEByZWFkb25seVxuICAgKiBAcmV0dXJuIHRydWUgaWYgdGhlIGN1cnJlbnQgbG9nZ2luZyBsZXZlbCBpcyBMZXZlbHMuQUxMLCBmYWxzZSBvdGhlcndpc2VcbiAgICovXG4gIGdldCBpc0FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGV2ZWwgPT09IExldmVscy5BTEw7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgbG9nZ2luZyBsZXZlbCBpcyBUUkFDRVxuICAgKlxuICAgKiBAcmVhZG9ubHlcbiAgICogQHJldHVybiB0cnVlIGlmIHRoZSBjdXJyZW50IGxvZ2dpbmcgbGV2ZWwgaXMgTGV2ZWxzLlRSQUNFLCBmYWxzZSBvdGhlcndpc2VcbiAgICovXG4gIGdldCBpc1RyYWNlKCkge1xuICAgIHJldHVybiB0aGlzLl9sZXZlbCA+IDAgJiYgdGhpcy5fbGV2ZWwgPD0gTGV2ZWxzLlRSQUNFO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB3aGV0aGVyIHRoZSBjdXJyZW50IGxvZ2dpbmcgbGV2ZWwgaXMgVFJBQ0VcbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqIEByZXR1cm4gdHJ1ZSBpZiB0aGUgY3VycmVudCBsb2dnaW5nIGxldmVsIGlzIExldmVscy5UUkFDRSwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBnZXQgaXNEZWJ1ZygpIHtcbiAgICByZXR1cm4gdGhpcy5fbGV2ZWwgPiAwICYmIHRoaXMuX2xldmVsIDw9IExldmVscy5ERUJVRztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgd2hldGhlciB0aGUgY3VycmVudCBsb2dnaW5nIGxldmVsIGlzIElORk9cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqIEByZXR1cm4gdHJ1ZSBpZiB0aGUgY3VycmVudCBsb2dnaW5nIGxldmVsIGlzIExldmVscy5JTkZPLCBmYWxzZSBvdGhlcndpc2VcbiAgICovXG4gIGdldCBpc0luZm8oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xldmVsID4gMCAmJiB0aGlzLl9sZXZlbCA8PSBMZXZlbHMuSU5GTztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgd2hldGhlciB0aGUgY3VycmVudCBsb2dnaW5nIGxldmVsIGlzIFdBUk5cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqIEByZXR1cm4gdHJ1ZSBpZiB0aGUgY3VycmVudCBsb2dnaW5nIGxldmVsIGlzIExldmVscy5XQVJOLCBmYWxzZSBvdGhlcndpc2VcbiAgICovXG4gIGdldCBpc1dhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xldmVsID4gMCAmJiB0aGlzLl9sZXZlbCA8PSBMZXZlbHMuV0FSTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgd2hldGhlciB0aGUgY3VycmVudCBsb2dnaW5nIGxldmVsIGlzIEVSUk9SXG4gICAqXG4gICAqIEByZWFkb25seVxuICAgKiBAcmV0dXJuIHRydWUgaWYgdGhlIGN1cnJlbnQgbG9nZ2luZyBsZXZlbCBpcyBMZXZlbHMuRVJST1IsIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAgZ2V0IGlzRXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xldmVsID4gMCAmJiB0aGlzLl9sZXZlbCA8PSBMZXZlbHMuRVJST1I7XG4gIH1cbn1cblxubGV0IGxvZ2dlciA9IG5ldyBMb2dnZXIoJycpO1xuZXhwb3J0IGRlZmF1bHQgbG9nZ2VyO1xuIl19