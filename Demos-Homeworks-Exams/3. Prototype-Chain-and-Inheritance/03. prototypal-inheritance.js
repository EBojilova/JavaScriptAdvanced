var personPrototype = {
	init: function constructor(name, age) {
		this.name = name;
		this.age = age;
		return this;
	},

	introduce: function introduce() {
		return "I'm " + this.name + ", Age: " + this.age;
	}
};

var studentPrototype = Object.create(personPrototype);

studentPrototype.init = function studentConstructor(name, age, grade) {
	personPrototype.init.call(this, name, age);
	this.grade = grade;
	return this;
};

studentPrototype.introduce = function studentIntroduce() {
	return personPrototype.introduce.call(this) + ', Grade: ' + this.grade;
};
//console.log("personPrototype")
//console.log(personPrototype);
//console.log("studentPrototype")
//console.log(studentPrototype);
//var a = Object.create(personPrototype).init("Niko", 11);
//console.log(Object.getPrototypeOf(a) === personPrototype)
var p = Object.create(studentPrototype).init("Pesho", 13, 2);
//console.log(Object.getPrototypeOf(p) === studentPrototype);
//console.log(Object.getPrototypeOf(Object.getPrototypeOf(p)) === personPrototype);
//console.log(p.introduce());
//console.log(a.introduce());
console.log(p);
//console.log(a);