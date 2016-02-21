//(function () {
//	console.log(this); // Logs: global
//})();
//In the global scope 'this' means the global scope
//i.e. window in browser
console.log("this === window? -> " + (this === window)); // Logs: true in browser console
//console.log("this === global? -> " + (this === global)); // Logs: false in node.js
//console.log(global); // Logs: global in node.js
console.log(this); // Logs: {} in node js. and window in browser console
a = 5;
console.log(window.a); // Logs: 5
console.log(this.a); // Logs; undefined in node.js and 5 in browser


