// taka go pravim za da moje da e preizpolzvaemo. Moje i da go napravim s Object.prototype.extends
Function.prototype.extends = function(parent) {
    // v po-starite browsers ne sastestvuva Object.create
    if (!Object.create) {
        Object.create = function(proto) {
            function F() {
            }

            F.prototype = proto;
            // sazdavame nov obekt sas podadenia prototip
            return new F();
        };
    }
    this.prototype = Object.create(parent.prototype);
    this.prototype.init = this;
}

var Person = (function() {
    function Person(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    Person.prototype.introduce = function introduce() {
        return "Name: " + this._firstName + " " + this._lastName;
    }

    return Person;
}());

var Student = (function() {
    function Student(firstName, lastName, grade) {
        Person.call(this, firstName, lastName);
        this._grade = grade;
    }

    Student.extends(Person);

    Student.prototype.introduce = function() {
        return Person.prototype.introduce.call(this) + ", Grade: " + this._grade;
    };

    return Student;
}());

var st = new Student("Peter", "Petrov", 4);
console.log(st)
//console.log('var st = new Student("Peter", "Petrov", 4);')
//console.log("st instance of Student: " + (st instanceof Student));
//console.log("st instance of Person: " + (st instanceof Person));
//console.log(st.introduce());
//
//var pesho = new Person('Pesho', 'Peshev');
//console.log("var pesho = new Person('Pesho', 'Peshev');")
//console.log('console.log(Person);')
//console.log(Person);
//console.log('console.log(pesho);')
//console.log(pesho);
//console.log('Object.getPrototypeOf(Person)')
//console.log(Object.getPrototypeOf(Person)); // [Function: Empty]
//console.log('Object.getPrototypeOf(pesho)')
//console.log(Object.getPrototypeOf(pesho)); // Person.prototype
//console.log('Object.getPrototypeOf(pesho) === Person')
//console.log(Object.getPrototypeOf(pesho) === Person);
//// dolnite 2 izraza savpadat
//console.log(Object.getPrototypeOf(pesho) === Person.prototype);
//console.log(pesho instanceof Person);
//
//// proveriava dali prototipa na Function sochi kam Person
//console.log(Person instanceof Function);
//console.log(Function);
