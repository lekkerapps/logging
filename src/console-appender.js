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
export class ConsoleAppender {

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

const appender = new ConsoleAppender();
export default appender;
