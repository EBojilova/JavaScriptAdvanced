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

    // Student.prototype = Person.prototype; // - WRONG! I dvata prototipa ste sochat kam edno i sasto miasto i tova e coupling
    // Student.prototype = new Person(); // - unexpected behaviour
    Student.prototype = Object.create(Person.prototype); // - supported in newest browsers. Kopirame prototipa, bez da kopirame referenciite, t.e. deep copy
    Student.prototype.init = Student; // return init back to Student

    Student.prototype.introduce = function() {
        return Person.prototype.introduce.call(this) + ", Grade: " + this._grade;
    };

    return Student;
}());

var st = new Student("Peter", "Petrov", 4);
console.log(st);
console.log('var st = new Student("Peter", "Petrov", 4);');
console.log("st instance of Student: " + (st instanceof Student));
console.log("st instance of Person: " + (st instanceof Person));
console.log(st.introduce());

var pesho = new Person('Pesho', 'Peshev');
console.log("var pesho = new Person('Pesho', 'Peshev');");
console.log('console.log(Person);');
console.log(Person);
console.log('console.log(pesho);');
console.log(pesho);
console.log('Object.getPrototypeOf(Person)');
console.log(Object.getPrototypeOf(Person)); // [Function: Empty]
console.log('Object.getPrototypeOf(pesho)');
console.log(Object.getPrototypeOf(pesho)); // Person.prototype
console.log('Object.getPrototypeOf(pesho) === Person');
console.log(Object.getPrototypeOf(pesho) === Person);
// dolnite 2 izraza savpadat
console.log(Object.getPrototypeOf(pesho) === Person.prototype);
console.log(pesho instanceof Person);

// proveriava dali prototipa na Function sochi kam Person
console.log(Person instanceof Function);
console.log(Function);
