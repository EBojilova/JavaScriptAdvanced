Array.prototype.flatten = function() {
    var resultArray = [];

    function getValues(array) {
       array.forEach(function(element) {
            if (Array.isArray(element)) {
                getValues(element);

            } else {
                resultArray.push(element);
            }
        })
    }

    getValues(this);
    return resultArray;
};

console.log("Problem 3. Array Flattening");
var array = [1, 2, 3, 4];
console.log(array.flatten());
array = [1, 2, [3, 4], [5, 6]];
console.log(array.flatten());
console.log(array); // Not changed
array = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array.flatten());
console.log("\n\n");