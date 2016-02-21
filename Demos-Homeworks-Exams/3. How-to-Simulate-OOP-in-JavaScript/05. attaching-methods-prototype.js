function Rect(x, y, width, height) {
	//var _x = x; // Hidden variable
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}

// po-pravilniat nachin e da zakrepim funkiciite kam prototipa,taka te ste imat edna i sasta referencia
// WRONG: pri tova definirane obache prezapisvame celia prototip i se maha constructora, koito sme setnali s Object.create
//http://stackoverflow.com/questions/13226043/create-a-js-class-iife-vs-return-prototype
Rect.prototype = {
	calcArea: function () {
		return this.width * this.height;
	},
	calcPerimeter: function () {
		return 2 * this.width + 2 * this.height;
	}
};

var rect1 = new Rect(50, 55, 15, 10),
	rect2 = new Rect(50, 55, 15, 10);

console.log(rect1.calcArea === rect2.calcArea);
console.log(rect1.calcArea() === rect2.calcArea());

console.log(rect1)