module.exports = {
  'es5': {
    'type': 'es5',
    'output': 'es5',
    'options': {
      'presets': ['es2015'],
      'plugins': ['transform-es2015-modules-amd'],
      'comments': false
    }
  },
  'commonjs': {
    'type': 'commonjs',
    'output': 'commonjs',
    'options': {
      'presets': ['es2015'],
      'plugins': ['transform-es2015-modules-commonjs'],
      'comments': false
    }
  },
  'es6': {
    'type': 'es6',
    'output': '',
    'options': {
      'presets': ['es2016'],
      'plugins': ['transform-es2015-modules-amd'],
      'comments': false
    }
  }
};
