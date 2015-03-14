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

  e2eSpecsSrc:   testRoot + 'e2e/**/*.ts',
  e2eSpecsDist:  outRoot  + 'e2e/dist/'
};
