console.log("Problem 3. Test the value of \"this\"");

function testContext() {
    console.log(this);
}

console.log("Global context:");
testContext();

function outer() {

    function inner() {
        testContext();
    }
    // vrastame ne samata funkcia, a izpalnenieto na funkciata
    inner();
}

// unless the function is called from an object, "this" will be the global context, e.g. window object
console.log("From within another function:");
outer();

var obj = {
    info: "the value of \"this\" is set to the object the function was called from."
};

console.log("From within an object:");
testContext.call(obj);

console.log("As an object (for example, using new testContext())");
var context = new testContext();