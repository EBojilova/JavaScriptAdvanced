function Rectangle(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	// WRONG- pri vsiaka instancia ste se sazdavat nanovo
	// po-dobre e da gi prikachim kam prototipa
	this.calcArea = function () {
		return this.width * this.height;
	};

	this.calcPerimeter = function () {
		return 2 * this.width + 2 * this.height;
	};
}

// Every function constructor creates functions attached to this
var rect1 = new Rectangle(50, 55, 15, 10),
	rect2 = new Rectangle(50, 55, 15, 10);

console.log(rect1.calcArea === rect2.calcArea);
console.log(rect1.calcArea() === rect2.calcArea());
console.log(rect2);