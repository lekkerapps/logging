# logging
A simple and flexible javascript logging utility

## Motivation
Looking across several logging utilities available didn't find one that matched the following combination for my projects needs:
* Singleton import of the logger (configure and use across the project via only module import)
* Direct invocation of native browser console logging method (allow to see correct line number for transpiled codes)
* Create custom logger (with prefix)
* Definition of custom appender
* Update level easily (disabled levels are binded directly to a no operation function, thus minimal overhead from logger)
* Having single logging interface, unwanted logging level can be removed from source at 'transpilation' time 

## Installation

```
  $ npm install lekkerapps.logging
```

## Usage and documentation
The Logger can be used as a singleton with the benefit of module loading

```javascript
  import Logger from 'logger';
```

By default the logger is configured with Level = WARN.  
The logging level can be configured: 
```javascript
  import Logger from 'logger';
  import {Levels} from 'logger';
  ...

  Logger.level = Levels.DEBUG;
```

New instance of Logger can also be created

```javascript
  import Logger from 'logger';
  ...

  let logger = new Logger('custom');
  logger.debug('custom logger');
```

Custom loggers will have a prefix for all log messages.
With the former example, the log output will be: 

>[custom] custom logger

Custom appender can also be defined

```javascript
  export class CustomAppender {
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

    _trace() {
      // process arguments
      // arguments[0] is the prefix
    }
    ...
  }
```

Using the custom appender
```javascript
  import {Logger} from 'logger';
  import {CustomAppender} from 'custom-appender';
  ...

  let logger = new Logger('Custom', new CustomAppender());
  logger.trace('logger initialized');
```


# License

Copyright &copy; 2016 Ashley G Ramdass <agramdass@gmail.com>
 
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
