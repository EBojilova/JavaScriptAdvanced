var Rect = (function () {
	var BORDERS = {
		LEFT: 0,
		RIGHT: 1000,
		TOP: 0,
		BOTTOM: 1000
	};

	function validatePosition() {
		if (this._x < BORDERS.LEFT || BORDERS.RIGHT < this._x ||
			this._y < BORDERS.TOP || BORDERS.BOTTOM < this._y) {
			return false;
		}
		return true;
	}

	function Rect(x, y, width, height) {
		this._x = x;
		this._y = y;
		//WRONG spored men triabva da se validira predi da se prisvoi na private x i y
		if (!validatePosition.call(this)) {
			throw new Error('Invalid Rect position');
		}

		this._width = width;
		this._height = height;
	}
	// WRONG taka triem constructora, setnat s new
	Rect.prototype = {
		calcArea: function () {
			return this._width * this._height;
		},
		calcPerimeter: function () {
			return 2 * this._width + 2 * this._height;
		}
	};

	return Rect;
}());


console.log(new Rect(1, 2, 30, 30).calcArea()); // Logs 900
console.log(new Rect(-1, 2, 30, 30).calcArea()); // throw an error