var path = require('path');

var appRoot  = 'src/app/';
var testRoot = 'src/test/';
var outRoot  = 'dist/'; 

module.exports = {
  root:   appRoot,
  source: appRoot + '**/*.ts',
  html:   appRoot + '**/*.html',
  dtsSource: 'dts/**/*.ts',
  style: 'styles/**/*.css',
  doc:'./doc',
  output: outRoot + 'app/',

  unitSpecsSrc:  testRoot + 'unit/**/*.ts',
  unitSpecsDist: outRoot  + 'test/unit/',

  e2eSpecsSrc:   testRoot + 'test/e2e/src/*.js',
  e2eSpecsDist:  outRoot  + 'test/e2e/dist/'
};
