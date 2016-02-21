function sayHello() {
	return 'Hello ' + this.name;
}

var pesho = {
	name: "Peter",
	// po-pravilno e da go zakachim kam prototipa
	hello: sayHello
};

var minka = {
	name: "Minka",
	// po-pravilno e da go zakachim kam prototipa
	hello: sayHello
}

console.log(pesho.hello()); // Hello Peter
console.log(minka.hello()); // Hello Minka

console.log(sayHello()); // Hello undefined

console.log(sayHello.call(pesho)); // Hello Peter
console.log(sayHello.apply(minka)); // Hello Minka