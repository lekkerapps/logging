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
import ConsoleAppender from './console-appender';

export const Levels = {
  'NONE': 0,
  'ALL': 1,
  'TRACE': 2,
  'DEBUG': 3,
  'INFO': 4,
  'WARN': 5,
  'ERROR': 6
};

export class Logger {
  constructor(name, appender) {
    if (name === undefined) {
      name = 'DEFAULT';
    }

    if (!appender) {
      // No appender, default to Console Appender
      this._appender = ConsoleAppender;
    } else {
      this._appender = appender;
    }

    this.name = name;
    this._level = Levels.WARN;
    this.children = [];
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

  _noop() { }

  set name(name) {
    if (name === undefined || name === null) {
      throw new Error('Name required!!!');
    }
    this._name = name;
    this._prefix = this._name.trim().length == 0 ? '' : `[${this._name}]`;
    this._initLogger();
  }

  createChild(name) {
    const child = new Logger(this.name + '/' + name, this._appender);
    child.level = this.level;
    this.children.push(child);
    return child;
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

  /**
   * Set the current logging level
   *
   * @param {Levels.value} level - The level to set for logging
   */
  set level(level) {
    if (level >= Levels.NONE && level <= Levels.ERROR) {
      this._level = level;
      this._initLogger();
      // Update children levels
      for (const child of this.children) {
        child.level = level;
      }
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

export default new Logger('');
