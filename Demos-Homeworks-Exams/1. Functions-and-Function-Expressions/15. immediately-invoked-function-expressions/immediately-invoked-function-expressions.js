(function () {
	console.log('Invoked')
}());

var iife = function(){ console.log("invoked!"); }();
var iife2 = 1 + function(){console.log("invoked!"); }();

(function(){ console.log("invoked!"); }());
(function(){ console.log("invoked!"); })();

!function(){ console.log("invoked!"); }();
true && function(){console.log("invoked!"); }();
