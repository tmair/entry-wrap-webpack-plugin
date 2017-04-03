var assert = require('assert');
var fs = require('fs');
var path = require('path');

var bundle = fs.readFileSync(path.resolve(__dirname, './dist/bundle.js'), 'utf8');
assert.equal(bundle.indexOf('require(["jquery"], function (jQuery) {'), 0);
assert.equal(bundle.length-2, bundle.lastIndexOf('})'));

var lazyBundle = fs.readFileSync(path.resolve(__dirname, './dist/0.bundle.js'), 'utf8');
assert.equal(lazyBundle.indexOf('require(["jquery"], function (jQuery) {'), -1);