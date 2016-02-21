var Person = (function() {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.name = this.firstName + " " + this.lastName;
    }

    return Person;
}());

console.log("Problem 1. Bug Fix");
var peter = new Person("Peter", "Jackson");
console.log(peter);
console.log(peter.name);
console.log(peter.firstName);
console.log(peter.lastName);
console.log("\n\n");