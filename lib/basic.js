(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _math = require('./math.es6');

var math = _interopRequireWildcard(_math);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var str = 'console';
if (str) {
  var _str = 'browser';
  document.write('Hello, ' + _str + '!');
}
console.log('Hello, ' + str + '!');

console.log("2π = " + math.sum(math.pi, math.pi));

},{"./math.es6":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = sum;
/**
 * Adds two numbers together.
 * @param {int} x The first number.
 * @param {int} y The second number.
 * @return {int} The sum of the two numbers.
 */
function sum(x, y) {
  return x + y;
}

var pi = exports.pi = 3.141593;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYmFzaWMuZXM2Iiwic3JjL21hdGguZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBU0E7O0lBQVk7Ozs7QUFQWixJQUFJLE1BQU0sU0FBTjtBQUNKLElBQUksR0FBSixFQUFTO0FBQ1AsTUFBSSxPQUFNLFNBQU4sQ0FERztBQUVQLFdBQVMsS0FBVCxhQUF5QixVQUF6QixFQUZPO0NBQVQ7QUFJQSxRQUFRLEdBQVIsYUFBc0IsU0FBdEI7O0FBR0EsUUFBUSxHQUFSLENBQVksVUFBVSxLQUFLLEdBQUwsQ0FBUyxLQUFLLEVBQUwsRUFBUyxLQUFLLEVBQUwsQ0FBNUIsQ0FBWjs7Ozs7Ozs7UUNKZ0I7Ozs7Ozs7QUFBVCxTQUFTLEdBQVQsQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CO0FBQ3hCLFNBQU8sSUFBSSxDQUFKLENBRGlCO0NBQW5COztBQUlBLElBQUksa0JBQUssUUFBTCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzdHIgPSAnY29uc29sZSc7XG5pZiAoc3RyKSB7XG4gIGxldCBzdHIgPSAnYnJvd3Nlcic7XG4gIGRvY3VtZW50LndyaXRlKGBIZWxsbywgJHtzdHJ9IWApO1xufVxuY29uc29sZS5sb2coYEhlbGxvLCAke3N0cn0hYCk7XG5cbmltcG9ydCAqIGFzIG1hdGggZnJvbSBcIi4vbWF0aC5lczZcIjtcbmNvbnNvbGUubG9nKFwiMs+AID0gXCIgKyBtYXRoLnN1bShtYXRoLnBpLCBtYXRoLnBpKSk7XG5cbiIsIi8qKlxuICogQWRkcyB0d28gbnVtYmVycyB0b2dldGhlci5cbiAqIEBwYXJhbSB7aW50fSB4IFRoZSBmaXJzdCBudW1iZXIuXG4gKiBAcGFyYW0ge2ludH0geSBUaGUgc2Vjb25kIG51bWJlci5cbiAqIEByZXR1cm4ge2ludH0gVGhlIHN1bSBvZiB0aGUgdHdvIG51bWJlcnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdW0oeCwgeSkge1xuICByZXR1cm4geCArIHk7XG59XG5cbmV4cG9ydCB2YXIgcGkgPSAzLjE0MTU5MztcbiJdfQ==
