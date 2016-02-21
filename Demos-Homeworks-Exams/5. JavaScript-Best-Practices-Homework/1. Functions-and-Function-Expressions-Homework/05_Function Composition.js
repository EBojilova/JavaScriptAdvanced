console.log("Problem 5. Function composition");

function compose(outerFunc, innerFunc) {
    return function() {
        // podavame argumentite na anonimnata funkcia
        return outerFunc.call(this, innerFunc.apply(this, arguments));
    }
}

// TODO: ne mojah da go podkaram v konzolata, da probvam v browsera
//Function.prototype.compose= function(innerFunc){
//    // mnogo e vajno tuka da zapametim vanshnata funkcia, tai kato po-dolu this stava promenliva
//    var outerFunc=this;
//    return function(){
//        outerFunc.call(this, innerFunc.apply(this,  arguments));
//    }
//}

var add = function add(x, y) {
    return x + y;
}
var addOne = function addOne(x) {
    return x + 1;
}
var square = function square(x) {
    return x * x;
}

console.log(compose(addOne, square)(5));
console.log(f(5));
console.log(compose(addOne, add)(5, 6));
console.log(compose(Math.cos, addOne)(-1));
console.log(compose(addOne, Math.cos)(-1));
console.log('\n');
var compositeFunction = compose(Math.sqrt, Math.cos);
console.log(compositeFunction(0.5));
console.log(compositeFunction(1));
console.log(compositeFunction(-1));

