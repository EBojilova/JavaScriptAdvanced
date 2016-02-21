//var factorial = function factorial(n)
var factorial = function(n) {
    if (n === 0) {
        return 1;
    }
    // tuka se vika imeto na promenlivata
    return n * factorial(n - 1);
};


console.log(factorial(5));

// tuka prisvoiavame promenlivata
var fact = factorial;
console.log(fact(5));

factorial = function() {
    return 'NOT FACTORIAL';
};

//console.log(factorial(5));
console.log(fact(5));