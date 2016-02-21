function Person(name, age) {
	// tozi fix popravia ako ne sme izvikali new
	if (!(this instanceof arguments.callee)) {
		//arguments.callee== Person
		//return new PersonCahing(name, age);
		return new arguments.callee(name, age);
	}
	this.name = name;
	this.age = age;
}


var p1 = new Person('With new', 12);
var p2 = Person('Withoud new', 13);
console.log(p1);
console.log(p2);