function Rectangle(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	// tova ne e dobra praktika, tai kato pri vsiaka instancia sazdavame nova funkcia, a ako e prez prototype, tia move da se preizpolzva
	this.calcArea = function () {
		return this.width * this.height;
	};

	this.calcPerimeter = function () {
		return 2 * this.width + 2 * this.height;
	};

	// return this; // see bellow RectangleReturn
}

var rect = new Rectangle(10, 20, 200, 300);

console.log(rect);
console.log("Rectangle X: " + rect.x + ", Y: " + rect.y);
console.log("Rectangle Width: " + rect.width + ", Height: " + rect.height);
console.log("Rectangle area: " + rect.calcArea());
console.log("Rectangle parameter: " + rect.calcPerimeter());
console.log(rect.width);

function RectangleReturn(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	this.calcArea = function () {
		return this.width * this.height;
	};

	this.calcPerimeter = function () {
		return 2 * this.width + 2 * this.height;
	};

	return this;
}

// without NEW- dobavili sme x, y, width............kam Window !!!! WRONG
var rect2 = RectangleReturn(20, 40, 50, 50);
console.log(rect2);
console.log("Rectangle X: " + rect2.x + ", Y: " + rect2.y);
console.log("Rectangle Width: " + rect2.width + ", Height: " + rect2.height);
console.log("Rectangle area: " + rect2.calcArea());
console.log("Rectangle parameter: " + rect2.calcPerimeter());
console.log(rect2.width);