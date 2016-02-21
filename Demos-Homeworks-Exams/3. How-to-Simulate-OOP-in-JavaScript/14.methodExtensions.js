
String.prototype.repeat= function repeatString(count){
    var result='';
    for (var i = 0; i < count; i++) {
        var obj = person[i];
        result+=this;
    }
    return result;
};

console.log('hi'.repeat(3));