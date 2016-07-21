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
  }; /**
      * Project: LekkerApps - Logging
      * Copyright 2016 Ashley G Ramdass <agramdass@gmail.com>
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *     http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */


  class Logger {
    constructor(name, appender) {
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

    _initLogger() {
      // this.fine = this.isFine() ? window.console.log.bind(window.console, '%c%s', 'color: #757575; font-size: 10px;') : this._noop;
      this.trace = this.isTrace ? this._appender.trace.bind(this._appender.binding, this._prefix) : this._noop;
      this.debug = this.isDebug ? this._appender.debug.bind(this._appender.binding, this._prefix) : this._noop;
      this.info = this.isInfo ? this._appender.info.bind(this._appender.binding, this._prefix) : this._noop;
      this.warn = this.isWarn ? this._appender.warn.bind(this._appender.binding, this._prefix) : this._noop;
      this.error = this.isError ? this._appender.error.bind(this._appender.binding, this._prefix) : this._noop;
    }

    _noop() {}

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

    /**
     * Set the current logging level
     *
     * @param {Levels.value} level - The level to set for logging
     */
    set level(level) {
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
    get level() {
      return this._level;
    }

    /**
     * Retrieves whether the current logging level is NONE
     *
     * @readonly
     * @return true if the current logging level is Levels.NONE, false otherwise
     */
    get isNone() {
      return this._level === Levels.NONE;
    }

    /**
     * Retrieves whether the current logging level is ALL
     *
     * @readonly
     * @return true if the current logging level is Levels.ALL, false otherwise
     */
    get isAll() {
      return this._level === Levels.ALL;
    }

    /**
     * Retrieves whether the current logging level is TRACE
     *
     * @readonly
     * @return true if the current logging level is Levels.TRACE, false otherwise
     */
    get isTrace() {
      return this._level > 0 && this._level <= Levels.TRACE;
    }

    /**
     * Retrieves whether the current logging level is TRACE
     *
     * @readonly
     * @return true if the current logging level is Levels.TRACE, false otherwise
     */
    get isDebug() {
      return this._level > 0 && this._level <= Levels.DEBUG;
    }

    /**
     * Retrieves whether the current logging level is INFO
     *
     * @readonly
     * @return true if the current logging level is Levels.INFO, false otherwise
     */
    get isInfo() {
      return this._level > 0 && this._level <= Levels.INFO;
    }

    /**
     * Retrieves whether the current logging level is WARN
     *
     * @readonly
     * @return true if the current logging level is Levels.WARN, false otherwise
     */
    get isWarn() {
      return this._level > 0 && this._level <= Levels.WARN;
    }

    /**
     * Retrieves whether the current logging level is ERROR
     *
     * @readonly
     * @return true if the current logging level is Levels.ERROR, false otherwise
     */
    get isError() {
      return this._level > 0 && this._level <= Levels.ERROR;
    }
  }

  exports.Logger = Logger;
  let logger = new Logger('');
  exports.default = logger;
});
//# sourceMappingURL=data:application/json;base64,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SSxLQUFKLEdBQVk7QUFDVixhQUFPLEtBQUssTUFBTCxLQUFnQixPQUFPLEdBQTlCO0FBQ0Q7O0FBRUQ7Ozs7OztBQU1BLFFBQUksT0FBSixHQUFjO0FBQ1osYUFBTyxLQUFLLE1BQUwsR0FBYyxDQUFkLElBQW1CLEtBQUssTUFBTCxJQUFlLE9BQU8sS0FBaEQ7QUFDRDs7QUFFRDs7Ozs7O0FBTUEsUUFBSSxPQUFKLEdBQWM7QUFDWixhQUFPLEtBQUssTUFBTCxHQUFjLENBQWQsSUFBbUIsS0FBSyxNQUFMLElBQWUsT0FBTyxLQUFoRDtBQUNEOztBQUVEOzs7Ozs7QUFNQSxRQUFJLE1BQUosR0FBYTtBQUNYLGFBQU8sS0FBSyxNQUFMLEdBQWMsQ0FBZCxJQUFtQixLQUFLLE1BQUwsSUFBZSxPQUFPLElBQWhEO0FBQ0Q7O0FBRUQ7Ozs7OztBQU1BLFFBQUksTUFBSixHQUFhO0FBQ1gsYUFBTyxLQUFLLE1BQUwsR0FBYyxDQUFkLElBQW1CLEtBQUssTUFBTCxJQUFlLE9BQU8sSUFBaEQ7QUFDRDs7QUFFRDs7Ozs7O0FBTUEsUUFBSSxPQUFKLEdBQWM7QUFDWixhQUFPLEtBQUssTUFBTCxHQUFjLENBQWQsSUFBbUIsS0FBSyxNQUFMLElBQWUsT0FBTyxLQUFoRDtBQUNEO0FBcklpQjs7VUFBUCxNLEdBQUEsTTtBQXdJYixNQUFJLFNBQVMsSUFBSSxNQUFKLENBQVcsRUFBWCxDQUFiO29CQUNlLE0iLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQcm9qZWN0OiBMZWtrZXJBcHBzIC0gTG9nZ2luZ1xuICogQ29weXJpZ2h0IDIwMTYgQXNobGV5IEcgUmFtZGFzcyA8YWdyYW1kYXNzQGdtYWlsLmNvbT5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCBDb25zb2xlQXBwZW5kZXIgZnJvbSAnLi9jb25zb2xlLWFwcGVuZGVyJztcblxuZXhwb3J0IGNvbnN0IExldmVscyA9IHtcbiAgJ05PTkUnOiAwLFxuICAnQUxMJzogMSxcbiAgJ1RSQUNFJzogMixcbiAgJ0RFQlVHJzogMyxcbiAgJ0lORk8nOiA0LFxuICAnV0FSTic6IDUsXG4gICdFUlJPUic6IDZcbn07XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBhcHBlbmRlcikge1xuICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5hbWUgPSAnREVGQVVMVCc7XG4gICAgfVxuXG4gICAgaWYgKCFhcHBlbmRlcikge1xuICAgICAgLy8gTm8gYXBwZW5kZXIsIGRlZmF1bHQgdG8gQ29uc29sZSBBcHBlbmRlclxuICAgICAgdGhpcy5fYXBwZW5kZXIgPSBDb25zb2xlQXBwZW5kZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FwcGVuZGVyID0gYXBwZW5kZXI7XG4gICAgfVxuXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fcHJlZml4ID0gJ1snICsgdGhpcy5fbmFtZSArICddJztcbiAgICB0aGlzLl9sZXZlbCA9IExldmVscy5XQVJOO1xuICAgIHRoaXMuX2luaXRMb2dnZXIoKTtcbiAgfVxuXG4gIF9pbml0TG9nZ2VyKCkge1xuICAgIC8vIHRoaXMuZmluZSA9IHRoaXMuaXNGaW5lKCkgPyB3aW5kb3cuY29uc29sZS5sb2cuYmluZCh3aW5kb3cuY29uc29sZSwgJyVjJXMnLCAnY29sb3I6ICM3NTc1NzU7IGZvbnQtc2l6ZTogMTBweDsnKSA6IHRoaXMuX25vb3A7XG4gICAgdGhpcy50cmFjZSA9IHRoaXMuaXNUcmFjZSA/IHRoaXMuX2FwcGVuZGVyLnRyYWNlLmJpbmQodGhpcy5fYXBwZW5kZXIuYmluZGluZywgdGhpcy5fcHJlZml4KSA6IHRoaXMuX25vb3A7XG4gICAgdGhpcy5kZWJ1ZyA9IHRoaXMuaXNEZWJ1ZyA/IHRoaXMuX2FwcGVuZGVyLmRlYnVnLmJpbmQodGhpcy5fYXBwZW5kZXIuYmluZGluZywgdGhpcy5fcHJlZml4KSA6IHRoaXMuX25vb3A7XG4gICAgdGhpcy5pbmZvID0gdGhpcy5pc0luZm8gPyB0aGlzLl9hcHBlbmRlci5pbmZvLmJpbmQodGhpcy5fYXBwZW5kZXIuYmluZGluZywgdGhpcy5fcHJlZml4KSA6IHRoaXMuX25vb3A7XG4gICAgdGhpcy53YXJuID0gdGhpcy5pc1dhcm4gPyB0aGlzLl9hcHBlbmRlci53YXJuLmJpbmQodGhpcy5fYXBwZW5kZXIuYmluZGluZywgdGhpcy5fcHJlZml4KSA6IHRoaXMuX25vb3A7XG4gICAgdGhpcy5lcnJvciA9IHRoaXMuaXNFcnJvciA/IHRoaXMuX2FwcGVuZGVyLmVycm9yLmJpbmQodGhpcy5fYXBwZW5kZXIuYmluZGluZywgdGhpcy5fcHJlZml4KSA6IHRoaXMuX25vb3A7XG4gIH1cblxuICBfbm9vcCgpIHsgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgc2V0IGFwcGVuZGVyKGFwcGVuZGVyKSB7XG4gICAgaWYgKCFhcHBlbmRlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcHBlbmRlciByZXF1aXJlZCEhIScpO1xuICAgIH1cbiAgICB0aGlzLl9hcHBlbmRlciA9IGFwcGVuZGVyO1xuICAgIHRoaXMuX2luaXRMb2dnZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGN1cnJlbnQgbG9nZ2luZyBsZXZlbFxuICAgKlxuICAgKiBAcGFyYW0ge0xldmVscy52YWx1ZX0gbGV2ZWwgLSBUaGUgbGV2ZWwgdG8gc2V0IGZvciBsb2dnaW5nXG4gICAqL1xuICBzZXQgbGV2ZWwobGV2ZWwpIHtcbiAgICBpZiAobGV2ZWwgPj0gTGV2ZWxzLk5PTkUgJiYgbGV2ZWwgPD0gTGV2ZWxzLkVSUk9SKSB7XG4gICAgICB0aGlzLl9sZXZlbCA9IGxldmVsO1xuICAgICAgdGhpcy5faW5pdExvZ2dlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgbGV2ZWw6ICcgKyBsZXZlbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgY3VycmVudCBsb2dnaW5nIGxldmVsXG4gICAqXG4gICAqIEByZXR1cm4gTG9nZ2luZyBsZXZlbFxuICAgKi9cbiAgZ2V0IGxldmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9sZXZlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgd2hldGhlciB0aGUgY3VycmVudCBsb2dnaW5nIGxldmVsIGlzIE5PTkVcbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqIEByZXR1cm4gdHJ1ZSBpZiB0aGUgY3VycmVudCBsb2dnaW5nIGxldmVsIGlzIExldmVscy5OT05FLCBmYWxzZSBvdGhlcndpc2VcbiAgICovXG4gIGdldCBpc05vbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xldmVsID09PSBMZXZlbHMuTk9ORTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgd2hldGhlciB0aGUgY3VycmVudCBsb2dnaW5nIGxldmVsIGlzIEFMTFxuICAgKlxuICAgKiBAcmVhZG9ubHlcbiAgICogQHJldHVybiB0cnVlIGlmIHRoZSBjdXJyZW50IGxvZ2dpbmcgbGV2ZWwgaXMgTGV2ZWxzLkFMTCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBnZXQgaXNBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xldmVsID09PSBMZXZlbHMuQUxMO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB3aGV0aGVyIHRoZSBjdXJyZW50IGxvZ2dpbmcgbGV2ZWwgaXMgVFJBQ0VcbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqIEByZXR1cm4gdHJ1ZSBpZiB0aGUgY3VycmVudCBsb2dnaW5nIGxldmVsIGlzIExldmVscy5UUkFDRSwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBnZXQgaXNUcmFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGV2ZWwgPiAwICYmIHRoaXMuX2xldmVsIDw9IExldmVscy5UUkFDRTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgd2hldGhlciB0aGUgY3VycmVudCBsb2dnaW5nIGxldmVsIGlzIFRSQUNFXG4gICAqXG4gICAqIEByZWFkb25seVxuICAgKiBAcmV0dXJuIHRydWUgaWYgdGhlIGN1cnJlbnQgbG9nZ2luZyBsZXZlbCBpcyBMZXZlbHMuVFJBQ0UsIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAgZ2V0IGlzRGVidWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xldmVsID4gMCAmJiB0aGlzLl9sZXZlbCA8PSBMZXZlbHMuREVCVUc7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgbG9nZ2luZyBsZXZlbCBpcyBJTkZPXG4gICAqXG4gICAqIEByZWFkb25seVxuICAgKiBAcmV0dXJuIHRydWUgaWYgdGhlIGN1cnJlbnQgbG9nZ2luZyBsZXZlbCBpcyBMZXZlbHMuSU5GTywgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBnZXQgaXNJbmZvKCkge1xuICAgIHJldHVybiB0aGlzLl9sZXZlbCA+IDAgJiYgdGhpcy5fbGV2ZWwgPD0gTGV2ZWxzLklORk87XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgbG9nZ2luZyBsZXZlbCBpcyBXQVJOXG4gICAqXG4gICAqIEByZWFkb25seVxuICAgKiBAcmV0dXJuIHRydWUgaWYgdGhlIGN1cnJlbnQgbG9nZ2luZyBsZXZlbCBpcyBMZXZlbHMuV0FSTiwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBnZXQgaXNXYXJuKCkge1xuICAgIHJldHVybiB0aGlzLl9sZXZlbCA+IDAgJiYgdGhpcy5fbGV2ZWwgPD0gTGV2ZWxzLldBUk47XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgbG9nZ2luZyBsZXZlbCBpcyBFUlJPUlxuICAgKlxuICAgKiBAcmVhZG9ubHlcbiAgICogQHJldHVybiB0cnVlIGlmIHRoZSBjdXJyZW50IGxvZ2dpbmcgbGV2ZWwgaXMgTGV2ZWxzLkVSUk9SLCBmYWxzZSBvdGhlcndpc2VcbiAgICovXG4gIGdldCBpc0Vycm9yKCkge1xuICAgIHJldHVybiB0aGlzLl9sZXZlbCA+IDAgJiYgdGhpcy5fbGV2ZWwgPD0gTGV2ZWxzLkVSUk9SO1xuICB9XG59XG5cbmxldCBsb2dnZXIgPSBuZXcgTG9nZ2VyKCcnKTtcbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcjtcbiJdfQ==