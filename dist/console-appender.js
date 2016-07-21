define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
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
  class ConsoleAppender {

    get trace() {
      return console.trace;
    }

    get debug() {
      return console.debug;
    }

    get info() {
      return console.info;
    }

    get warn() {
      return console.warn;
    }

    get error() {
      return console.error;
    }

    get binding() {
      return console;
    }
  }

  exports.ConsoleAppender = ConsoleAppender;
  const appender = new ConsoleAppender();
  exports.default = appender;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnNvbGUtYXBwZW5kZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQk8sUUFBTSxlQUFOLENBQXNCOztBQUUzQixRQUFJLEtBQUosR0FBWTtBQUNWLGFBQU8sUUFBUSxLQUFmO0FBQ0Q7O0FBRUQsUUFBSSxLQUFKLEdBQVk7QUFDVixhQUFPLFFBQVEsS0FBZjtBQUNEOztBQUVELFFBQUksSUFBSixHQUFXO0FBQ1QsYUFBTyxRQUFRLElBQWY7QUFDRDs7QUFFRCxRQUFJLElBQUosR0FBVztBQUNULGFBQU8sUUFBUSxJQUFmO0FBQ0Q7O0FBRUQsUUFBSSxLQUFKLEdBQVk7QUFDVixhQUFPLFFBQVEsS0FBZjtBQUNEOztBQUVELFFBQUksT0FBSixHQUFjO0FBQ1osYUFBTyxPQUFQO0FBQ0Q7QUF4QjBCOztVQUFoQixlLEdBQUEsZTtBQTJCYixRQUFNLFdBQVcsSUFBSSxlQUFKLEVBQWpCO29CQUNlLFEiLCJmaWxlIjoiY29uc29sZS1hcHBlbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUHJvamVjdDogTGVra2VyQXBwcyAtIExvZ2dpbmdcbiAqIENvcHlyaWdodCAyMDE2IEFzaGxleSBHIFJhbWRhc3MgPGFncmFtZGFzc0BnbWFpbC5jb20+XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgY2xhc3MgQ29uc29sZUFwcGVuZGVyIHtcblxuICBnZXQgdHJhY2UoKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUudHJhY2U7XG4gIH1cblxuICBnZXQgZGVidWcoKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUuZGVidWc7XG4gIH1cblxuICBnZXQgaW5mbygpIHtcbiAgICByZXR1cm4gY29uc29sZS5pbmZvO1xuICB9XG5cbiAgZ2V0IHdhcm4oKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUud2FybjtcbiAgfVxuXG4gIGdldCBlcnJvcigpIHtcbiAgICByZXR1cm4gY29uc29sZS5lcnJvcjtcbiAgfVxuXG4gIGdldCBiaW5kaW5nKCkge1xuICAgIHJldHVybiBjb25zb2xlO1xuICB9XG59XG5cbmNvbnN0IGFwcGVuZGVyID0gbmV3IENvbnNvbGVBcHBlbmRlcigpO1xuZXhwb3J0IGRlZmF1bHQgYXBwZW5kZXI7XG4iXX0=