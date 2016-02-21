var calculator = (function() {
    var logger = [],
        logAction,
        getLogs,
        addNumbers,
        subtractNumbers,
        multiplyNumbers,
        divideNumbers;
    // minus Extending objects can be difficult since no prototyping is used
    // Each object instance creates new copies of functions in memory
    logAction = function logAction(action) {
        logger.push(action);
    };

    getLogs = function getLogs() {
        return logger;
    };

    addNumbers = function addNumbers(x, y) {
        var result = x + y;
        logAction(x + ' + ' + y + ' = ' + result);
        return result;
    };

    subtractNumbers = function subtractNumbers(x, y) {
        var result = x - y;
        logAction(x + ' - ' + y + ' = ' + result);
        return result;
    };

    multiplyNumbers = function multiplyNumbers(x, y) {
        var result = x * y;
        logAction(x + ' * ' + y + ' = ' + result);
        return result;
    };

    divideNumbers = function divideNumbers(x, y) {
        var result = x / y;
        logAction(x + ' / ' + y + ' = ' + result);
        return result;
    };

    return {
        add     : addNumbers,
        subtract: subtractNumbers,
        multiply: multiplyNumbers,
        divide  : divideNumbers,
        getLogs : getLogs
    }
}());

console.log('Revealing Module Pattern');
console.log(calculator);

//console.log(calculator.add(2, 5)); // 2 + 5 = 7
//console.log(calculator.subtract(10, 7)); // 10 - 7 = 3
//console.log(calculator.multiply(15, 3)); // 15 * 3 = 45
//console.log(calculator.divide(28, 4)); // 28 / 4 = 7
//console.log(calculator.getLogs());