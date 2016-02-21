console.log(a); // undefined
 var a = 5;

function calculate() {
	calculateArea();

	function calculateArea() {
		console.log('Calculated');
	}
}

calc(); // will call the last defninition of the fuction
//calculateArea(); //ReferenceError: calculateArea is not defined- it is decalared in function scope
calculate(); // Calculated

var calc = function calc() {
	console.log('Calculated');
}

if (false) {
	function calc() {
		console.log('Calculated from FALSE IF');
	}
};