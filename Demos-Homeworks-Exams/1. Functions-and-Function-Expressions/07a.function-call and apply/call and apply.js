
function printMsg(msg) {
    console.log("Message: " + msg);
}
printMsg.apply(null, ["Important message"]);
// Here "this" is null, since it is not used in the function

var numbers = [1, 54, 2, 324, 2];
var max = Math.max.apply(null, numbers);
console.log(max)