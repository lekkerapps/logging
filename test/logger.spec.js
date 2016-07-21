import {Logger, Levels} from 'es5/logger';

class MockAppender {
  get trace() {
    return this._trace;
  }

  get debug() {
    return this._debug;
  }

  get info() {
    return this._info;
  }

  get warn() {
    return this._warn;
  }

  get error() {
    return this._error;
  }

  get binding() {
    return this;
  }

  _trace(prefix, log) {
    this.log = log;
  }

  _debug() { }

  _info() { }

  _warn() { }

  _error() { }
}

describe('Logger', () => {
  function invokeLogger(logger) {
    logger.trace('Trace msg ...');
    logger.debug('Debug msg ...');
    logger.info('Info msg ...');
    logger.warn('Warn msg...');
    logger.error('Error msg ...');
  }

  describe('Invoke Levels', () => {
    let appender, logger;
    beforeEach((done) => {
      appender = new MockAppender();
      logger = new Logger('trace', appender);
      spyOn(appender, '_trace').and.callThrough();
      spyOn(appender, '_debug').and.callThrough();
      spyOn(appender, '_info').and.callThrough();
      spyOn(appender, '_warn').and.callThrough();
      spyOn(appender, '_error').and.callThrough();
      done();
    });

    afterEach((done) => {
      appender = logger = null;
      done();
    });

    it('Level = ALL: Should invoke trace, debug, info, warn and error', () => {
      logger.level = Levels.ALL;
      invokeLogger(logger);

      expect(logger.isTrace).toBe(true);
      expect(logger.isDebug).toBe(true);
      expect(logger.isInfo).toBe(true);
      expect(logger.isWarn).toBe(true);
      expect(logger.isError).toBe(true);

      expect(appender._trace).toHaveBeenCalled();
      expect(appender._debug).toHaveBeenCalled();
      expect(appender._info).toHaveBeenCalled();
      expect(appender._warn).toHaveBeenCalled();
      expect(appender._error).toHaveBeenCalled();
    });

    it('Level = NONE: Should NOT invoke trace, debug, info, warn and error', () => {
      logger.level = Levels.NONE;
      invokeLogger(logger);

      expect(logger.isTrace).toBe(false);
      expect(logger.isDebug).toBe(false);
      expect(logger.isInfo).toBe(false);
      expect(logger.isWarn).toBe(false);
      expect(logger.isError).toBe(false);

      expect(appender._trace).not.toHaveBeenCalled();
      expect(appender._debug).not.toHaveBeenCalled();
      expect(appender._info).not.toHaveBeenCalled();
      expect(appender._warn).not.toHaveBeenCalled();
      expect(appender._error).not.toHaveBeenCalled();
    });

    it('Level = TRACE: Should invoke trace, debug, info, warn and error', () => {
      logger.level = Levels.TRACE;
      invokeLogger(logger);

      expect(logger.isTrace).toBe(true);
      expect(logger.isDebug).toBe(true);
      expect(logger.isInfo).toBe(true);
      expect(logger.isWarn).toBe(true);
      expect(logger.isError).toBe(true);

      expect(appender.log).toEqual('Trace msg ...');
      expect(appender._trace).toHaveBeenCalled();
      expect(appender._debug).toHaveBeenCalled();
      expect(appender._info).toHaveBeenCalled();
      expect(appender._warn).toHaveBeenCalled();
      expect(appender._error).toHaveBeenCalled();
    });

    it('Level = DEBUG: Should invoke debug, info, warn and error', () => {
      logger.level = Levels.DEBUG;
      invokeLogger(logger);

      expect(logger.isTrace).toBe(false);
      expect(logger.isDebug).toBe(true);
      expect(logger.isInfo).toBe(true);
      expect(logger.isWarn).toBe(true);
      expect(logger.isError).toBe(true);

      expect(appender._trace).not.toHaveBeenCalled();
      expect(appender._debug).toHaveBeenCalled();
      expect(appender._info).toHaveBeenCalled();
      expect(appender._warn).toHaveBeenCalled();
      expect(appender._error).toHaveBeenCalled();
    });

    it('Level = INFO: Should invoke info, warn and error', () => {
      logger.level = Levels.INFO;
      invokeLogger(logger);

      expect(logger.isTrace).toBe(false);
      expect(logger.isDebug).toBe(false);
      expect(logger.isInfo).toBe(true);
      expect(logger.isWarn).toBe(true);
      expect(logger.isError).toBe(true);

      expect(appender._trace).not.toHaveBeenCalled();
      expect(appender._debug).not.toHaveBeenCalled();
      expect(appender._info).toHaveBeenCalled();
      expect(appender._warn).toHaveBeenCalled();
      expect(appender._error).toHaveBeenCalled();
    });

    it('Level = WARN: Should invoke warn and error', () => {
      logger.level = Levels.WARN;
      invokeLogger(logger);

      expect(logger.isTrace).toBe(false);
      expect(logger.isDebug).toBe(false);
      expect(logger.isInfo).toBe(false);
      expect(logger.isWarn).toBe(true);
      expect(logger.isError).toBe(true);

      expect(appender._trace).not.toHaveBeenCalled();
      expect(appender._debug).not.toHaveBeenCalled();
      expect(appender._info).not.toHaveBeenCalled();
      expect(appender._warn).toHaveBeenCalled();
      expect(appender._error).toHaveBeenCalled();
    });

    it('Level = ERROR: Should invoke only error', () => {
      logger.level = Levels.ERROR;
      invokeLogger(logger);

      expect(logger.isTrace).toBe(false);
      expect(logger.isDebug).toBe(false);
      expect(logger.isInfo).toBe(false);
      expect(logger.isWarn).toBe(false);
      expect(logger.isError).toBe(true);

      expect(appender._trace).not.toHaveBeenCalled();
      expect(appender._debug).not.toHaveBeenCalled();
      expect(appender._info).not.toHaveBeenCalled();
      expect(appender._warn).not.toHaveBeenCalled();
      expect(appender._error).toHaveBeenCalled();
    });
  });

  describe('Log binding', () => {
    class DebugAppender {
      get trace() {
        return this._trace;
      }

      get debug() {
        return this._debug;
      }

      get info() {
        return this._info;
      }

      get warn() {
        return this._warn;
      }

      get error() {
        return this._error;
      }

      get binding() {
        return 'Debug';
      }

      _trace() {
      }

      _debug() {
        return this;
      }

      _info() { }

      _warn() { }

      _error() { }
    }
    it('Should correctly set "this" binding', () => {
      let appender = new DebugAppender();
      let logger = new Logger('logger', appender);
      logger.level = Levels.ALL;
      let assignedThis = logger.debug('Testing binding');
      expect(assignedThis).toEqual('Debug');
    });
  });
});
