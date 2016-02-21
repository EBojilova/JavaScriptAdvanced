function add(n) {
    var inner = function (x) {
        return add(n + x);
    };

    inner.valueOf = inner.toString = function () {
        return n;
    };

    return inner;
}

//Това е обяснението на автора на решението:
//The + casts the result of sum() to number. In that case JavaScript calls the .valueOf method of an object.
// Since I'm returning anonymous function, this helps to convert it to primitive type.
// As you can see, I overwrote the native .valueOf with my own.
var addTwo = +add(2);
console.log(addTwo); //2

addTwo = add(2);
console.log(+addTwo(3)(5)(1)(7)); //18