//http://weblogs.asp.net/dwahlin/techniques-strategies-and-patterns-for-structuring-javascript-code-the-prototype-pattern
var Calculator = function(name) {
    this._name = name;
}

// nedostatak- prezapisva se celia prototype i se prekasva naslediavaneto
// v sluchaia s calculator niama naslediavane
Calculator.prototype = {
    add     : function(x, y) {
        return (x + y);
    },
    subtract: function(x, y) {
        return (x - y);
    },
    multiply: function(x, y) {
        return (x * y);
    },
    divide  : function(x, y) {
        return (x / y);
    }
};
// I have added, but in this case is not needed.
Calculator.prototype.constructor=Calculator;

console.log('Prototype Pattern ');
var calc = new Calculator('SoftUniCalculator');
console.log(calc);
//console.log(calc.add(2, 5)); // 2 + 5 = 7
//console.log(calc.subtract(10, 7)); // 10 - 7 = 3
//console.log(calc.multiply(15, 3)); // 15 * 3 = 45
//console.log(calc.divide(28, 4)); // 28 / 4 = 7