"use strict";
var Calculator = function(name) {
    this.name = name;
};

// nedostatak- prezapisva se celia prototype i se prekasva naslediavaneto
// v sluchaia s calculator niama naslediavane
Calculator.prototype = (function() {
    var logger = [],
        logAction,
        getLogs,
        addNumbers,
        subtractNumbers,
        multiplyNumbers,
        divideNumbers,
        formatLog;

    addNumbers = function(x, y) {
        var result = x + y;
        logAction(formatLog(x, y, '+', result));
        return result;
    };

    subtractNumbers = function(x, y) {
        var result = x - y;
        logAction(formatLog(x, y, '-', result));
        return result;
    };

    multiplyNumbers = function(x, y) {
        var result = x * y;
        logAction(formatLog(x, y, '*', result));
        return result;
    }

    divideNumbers = function(x, y) {
        var result = x / y;
        logAction(formatLog(x, y, '/', result));
        return result;
    };

    getLogs = function() {
        return logger;
    };

    logAction = function logAction(action) {
        logger.push(action);
    };

    formatLog = function formatLog(x, y, operator, result) {
        return x + ' ' + operator + ' ' + y + ' = ' + result;
    };

    // exposed members
    return {
        add     : addNumbers,
        subtract: subtractNumbers,
        multiply: multiplyNumbers,
        divide  : divideNumbers,
        getLogs : getLogs
    };
}());
// I have added, but in this case is not needed.
Calculator.prototype.constructor=Calculator;

console.log('Revealing Prototype Pattern');
var calc = new Calculator('SoftUniCalc');
console.log(calc);
//console.log(calc.add(2, 5)); // 2 + 5 = 7
//console.log(calc.subtract(10, 7)); // 10 - 7 = 3
//console.log(calc.multiply(15, 3)); // 15 * 3 = 45
//console.log(calc.divide(28, 4)); // 28 / 4 = 7
//console.log(calc.getLogs());