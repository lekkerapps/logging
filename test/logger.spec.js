import {Logger, Levels} from 'logger';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

chai.use(spies);

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
      chai.spy.on(appender, '_trace');
      chai.spy.on(appender, '_debug');
      chai.spy.on(appender, '_info');
      chai.spy.on(appender, '_warn');
      chai.spy.on(appender, '_error');
      done();
    });

    afterEach((done) => {
      appender = logger = null;
      done();
    });

    it('Level = ALL: Should invoke trace, debug, info, warn and error', () => {
      logger.level = Levels.ALL;
      invokeLogger(logger);

      expect(logger.isTrace).to.be.true;
      expect(logger.isDebug).to.be.true;
      expect(logger.isInfo).to.be.true;
      expect(logger.isWarn).to.be.true;
      expect(logger.isError).to.be.true;

      expect(appender._trace).to.have.been.called();
      expect(appender._debug).to.have.been.called();
      expect(appender._info).to.have.been.called();
      expect(appender._warn).to.have.been.called();
      expect(appender._error).to.have.been.called();
    });

    it('Level = NONE: Should NOT invoke trace, debug, info, warn and error', () => {
      logger.level = Levels.NONE;
      invokeLogger(logger);

      expect(logger.isTrace).to.be.false;
      expect(logger.isDebug).to.be.false;
      expect(logger.isInfo).to.be.false;
      expect(logger.isWarn).to.be.false;
      expect(logger.isError).to.be.false;

      expect(appender._trace).to.not.have.been.called();
      expect(appender._debug).to.not.have.been.called();
      expect(appender._info).to.not.have.been.called();
      expect(appender._warn).to.not.have.been.called();
      expect(appender._error).to.not.have.been.called();
    });

    it('Level = TRACE: Should invoke trace, debug, info, warn and error', () => {
      logger.level = Levels.TRACE;
      invokeLogger(logger);

      expect(logger.isTrace).to.be.true;
      expect(logger.isDebug).to.be.true;
      expect(logger.isInfo).to.be.true;
      expect(logger.isWarn).to.be.true;
      expect(logger.isError).to.be.true;

      expect(appender.log).to.equal('Trace msg ...');
      expect(appender._trace).to.have.been.called();
      expect(appender._debug).to.have.been.called();
      expect(appender._info).to.have.been.called();
      expect(appender._warn).to.have.been.called();
      expect(appender._error).to.have.been.called();
    });

    it('Level = DEBUG: Should invoke debug, info, warn and error', () => {
      logger.level = Levels.DEBUG;
      invokeLogger(logger);

      expect(logger.isTrace).to.be.false;
      expect(logger.isDebug).to.be.true;
      expect(logger.isInfo).to.be.true;
      expect(logger.isWarn).to.be.true;
      expect(logger.isError).to.be.true;

      expect(appender._trace).to.not.have.been.called();
      expect(appender._debug).to.have.been.called();
      expect(appender._info).to.have.been.called();
      expect(appender._warn).to.have.been.called();
      expect(appender._error).to.have.been.called();
    });

    it('Level = INFO: Should invoke info, warn and error', () => {
      logger.level = Levels.INFO;
      invokeLogger(logger);

      expect(logger.isTrace).to.be.false;
      expect(logger.isDebug).to.be.false;
      expect(logger.isInfo).to.be.true;
      expect(logger.isWarn).to.be.true;
      expect(logger.isError).to.be.true;

      expect(appender._trace).to.not.have.been.called();
      expect(appender._debug).to.not.have.been.called();
      expect(appender._info).to.have.been.called();
      expect(appender._warn).to.have.been.called();
      expect(appender._error).to.have.been.called();
    });

    it('Level = WARN: Should invoke warn and error', () => {
      logger.level = Levels.WARN;
      invokeLogger(logger);

      expect(logger.isTrace).to.be.false;
      expect(logger.isDebug).to.be.false;
      expect(logger.isInfo).to.be.false;
      expect(logger.isWarn).to.be.true;
      expect(logger.isError).to.be.true;

      expect(appender._trace).to.not.have.been.called();
      expect(appender._debug).to.not.have.been.called();
      expect(appender._info).to.not.have.been.called();
      expect(appender._warn).to.have.been.called();
      expect(appender._error).to.have.been.called();
    });

    it('Level = ERROR: Should invoke only error', () => {
      logger.level = Levels.ERROR;
      invokeLogger(logger);

      expect(logger.isTrace).to.be.false;
      expect(logger.isDebug).to.be.false;
      expect(logger.isInfo).to.be.false;
      expect(logger.isWarn).to.be.false;
      expect(logger.isError).to.be.true;

      expect(appender._trace).to.not.have.been.called();
      expect(appender._debug).to.not.have.been.called();
      expect(appender._info).to.not.have.been.called();
      expect(appender._warn).to.not.have.been.called();
      expect(appender._error).to.have.been.called();
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
      expect(assignedThis).to.equal('Debug');
    });
  });
});
