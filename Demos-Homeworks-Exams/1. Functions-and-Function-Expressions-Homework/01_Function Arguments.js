function printArgsInfo() {
    var type;
    arguments[0].forEach(function(element) {
        type = typeof element;
        if (Array.isArray(element)) {
            type = 'array';
        }
        console.log(element + ' (' + type + ')');
    });
}

//function printArgsInfo() {
//    var type;
//    arguments[0].forEach(function(element) {
//        if (element) {
//            type = arguments[i].constructor.name.toLocaleLowerCase();
//        }
//        else {
//            type = typeof arguments[i];
//        }
//        console.log(element + ' (' + type + ')');
//    });
//}

//var input = [
//    2,
//    3,
//    2.5,
//    -110.5564,
//    false
//];
//var input = [null, undefined, "", 0, [], {}];
//var input = [[1, 2], ["string", "array"], ["single value"]];
var input = ["some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20}];
//var input = [[[1, [2, [3, [4, 5]]]], ["string", "array"]]];

printArgsInfo(input);