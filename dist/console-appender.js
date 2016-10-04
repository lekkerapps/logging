define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  class ConsoleAppender {

    get trace() {
      return console.trace || console.log;
    }

    get debug() {
      return console.debug || console.log;
    }

    get info() {
      return console.info || console.log;
    }

    get warn() {
      return console.warn || console.log;
    }

    get error() {
      return console.error || console.log;
    }

    get binding() {
      return console;
    }
  }

  exports.ConsoleAppender = ConsoleAppender;
  const appender = new ConsoleAppender();
  exports.default = appender;
});