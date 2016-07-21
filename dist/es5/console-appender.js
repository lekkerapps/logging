define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  var ConsoleAppender = exports.ConsoleAppender = function () {
    function ConsoleAppender() {
      _classCallCheck(this, ConsoleAppender);
    }

    _createClass(ConsoleAppender, [{
      key: "trace",
      get: function get() {
        return console.trace;
      }
    }, {
      key: "debug",
      get: function get() {
        return console.debug;
      }
    }, {
      key: "info",
      get: function get() {
        return console.info;
      }
    }, {
      key: "warn",
      get: function get() {
        return console.warn;
      }
    }, {
      key: "error",
      get: function get() {
        return console.error;
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnNvbGUtYXBwZW5kZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQWdCYSxlLFdBQUEsZTs7Ozs7OzswQkFFQztBQUNWLGVBQU8sUUFBUSxLQUFmO0FBQ0Q7OzswQkFFVztBQUNWLGVBQU8sUUFBUSxLQUFmO0FBQ0Q7OzswQkFFVTtBQUNULGVBQU8sUUFBUSxJQUFmO0FBQ0Q7OzswQkFFVTtBQUNULGVBQU8sUUFBUSxJQUFmO0FBQ0Q7OzswQkFFVztBQUNWLGVBQU8sUUFBUSxLQUFmO0FBQ0Q7OzswQkFFYTtBQUNaLGVBQU8sT0FBUDtBQUNEOzs7Ozs7QUFHSCxNQUFNLFdBQVcsSUFBSSxlQUFKLEVBQWpCO29CQUNlLFEiLCJmaWxlIjoiY29uc29sZS1hcHBlbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUHJvamVjdDogTGVra2VyQXBwcyAtIExvZ2dpbmdcbiAqIENvcHlyaWdodCAyMDE2IEFzaGxleSBHIFJhbWRhc3MgPGFncmFtZGFzc0BnbWFpbC5jb20+XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgY2xhc3MgQ29uc29sZUFwcGVuZGVyIHtcblxuICBnZXQgdHJhY2UoKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUudHJhY2U7XG4gIH1cblxuICBnZXQgZGVidWcoKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUuZGVidWc7XG4gIH1cblxuICBnZXQgaW5mbygpIHtcbiAgICByZXR1cm4gY29uc29sZS5pbmZvO1xuICB9XG5cbiAgZ2V0IHdhcm4oKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUud2FybjtcbiAgfVxuXG4gIGdldCBlcnJvcigpIHtcbiAgICByZXR1cm4gY29uc29sZS5lcnJvcjtcbiAgfVxuXG4gIGdldCBiaW5kaW5nKCkge1xuICAgIHJldHVybiBjb25zb2xlO1xuICB9XG59XG5cbmNvbnN0IGFwcGVuZGVyID0gbmV3IENvbnNvbGVBcHBlbmRlcigpO1xuZXhwb3J0IGRlZmF1bHQgYXBwZW5kZXI7XG4iXX0=