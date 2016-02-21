var calculator = (function() {
    var logger = [];

    function logAction(action) {
        logger.push(action);
    }

    // minus- truden za extendvane- primerno v substract, da izpolzvame devide
    // reshenieto e ako predvaritelno celia return go prisvoim na promenliva calc=.......
    // i vatre v av funkciite vikame primerno calc.devide.......-vij otdolu
    // drugia minus e che na vsiaka instancia se sazdavat novi funkicii(ne sa v prototype)
    return {
        add     : function(x, y) {
            var result = x + y;
            logAction(x + ' + ' + y + ' = ' + result);
            return result;
        },
        subtract: function(x, y) {
            //calc.devide.........
            var result = x - y;
            logAction(x + ' - ' + y + ' = ' + result);
            return result;
        },
        multiply: function(x, y) {
            var result = x * y;
            logAction(x + ' * ' + y + ' = ' + result);
            return result;
        },
        divide  : function(x, y) {
            var result = x / y;
            logAction(x + ' / ' + y + ' = ' + result);
            return result;
        },
        getLogs : function() {
            return logger;
        }
    }
}());

console.log('Module Pattern ');
console.log(calculator);

//console.log(calculator.add(2, 5)); // 2 + 5 = 7
//console.log(calculator.subtract(10, 7)); // 10 - 7 = 3
//console.log(calculator.multiply(15, 3)); // 15 * 3 = 45
//console.log(calculator.divide(28, 4)); // 28 / 4 = 7
//console.log(calculator.getLogs());