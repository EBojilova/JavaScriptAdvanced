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
    this.prototype.constructor = this;
};

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function validatePositiveNumber(number, type) {
    if (!isNumber(number) || number <= 0) {
        throw new Error("The " + type + " should be a positive number");
    }

}

var shapeModulePrototypes = (function() {
    var Shape = (function() {
        function Shape(color) {
            this._color = color;
        }

        Shape.prototype.toString = function() {
            return "Color: " + this._color;
        };

        return Shape;
    })();

    var Circle = (function() {
        function Circle(centerX, centerY, radius, color) {
            this._centerX = centerX;
            this._centerY = centerY;
            validatePositiveNumber(radius, 'radius');
            this._radius = radius;
            Shape.call(this, color);
        }

        Circle.extends(Shape);

        Circle.prototype.toString = function() {
            var result = "Circle: ";
            result += "Center: O(" + this._centerX + ", " + this._centerY + "), ";
            result += "Radius: " + this._radius + ", ";
            result += Shape.prototype.toString.call(this);

            return result;
        };

        return Circle;
    })();



    var Rectangle = (function() {
        function Rectangle(topLeftX, topLeftY, width, height, color) {
            this._topLeftX = topLeftX;
            this._topleftY = topLeftY;
            validatePositiveNumber(width, "width");
            this._width = width;
            validatePositiveNumber(height, 'height');
            this._height = height;
            Shape.call(this, color);
        }

        Rectangle.extends(Shape);

        Rectangle.prototype.toString = function() {
            var result = "Rectangle: ";
            result += "Top-left corner: A(" + this._topLeftX + ", " + this._topleftY + "), ";
            result += "Width: " + this._width + ", ";
            result += "Height: " + this._height + ", ";
            result += Shape.prototype.toString.call(this);

            return result;
        };

        return Rectangle;
    })();

    var Triangle = (function() {
        function Triangle(pointAx, pointAy, pointBx, pointBy, pointCx, pointCy, color) {
            validateTriangleVertices(pointAx, pointAy, pointBx, pointBy, pointCx, pointCy);
            this._aX = pointAx;
            this._aY = pointAy;
            this._bX = pointBx;
            this._bY = pointBy;
            this._cX = pointCx;
            this._cY = pointCy;
            Shape.call(this, color);
        }

        Triangle.extends(Shape);

        Triangle.prototype.toString = function() {
            var result = "Triangle: ";
            result += "A(" + this._aX + ", " + this._aY + "), ";
            result += "B(" + this._bX + ", " + this._bY + "), ";
            result += "C(" + this._cX + ", " + this._cY + "), ";
            result += Shape.prototype.toString.call(this);

            return result;
        };

        function validateTriangleVertices(aX, aY, bX, bY, cX, cY) {
            if (!isValidTriangle(aX, aY, bX, bY, cX, cY)) {
                throw new Error("The points provided do not form a valid triangle.");
            }
        }

        function isValidTriangle(aX, aY, bX, bY, cX, cY) {
            var sideA = getDistanceBetweenPoints(aX, aY, bX, bY);
            var sideB = getDistanceBetweenPoints(bX, bY, cX, cY);
            var sideC = getDistanceBetweenPoints(aX, aY, cX, cY);

            if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
                return false;
            }

            if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
                return false;
            }

            return true;
        }

        function getDistanceBetweenPoints (aX, aY, bX, bY) {
            var deltaX = aX - bX;
            var deltaY = aY - bY;

            var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            return distance;
        }

        return Triangle;
    })();

    var Line = (function() {
        function Line(aX, aY, bX, bY, color) {
            this._aX = aX;
            this._aY = aY;
            this._bX = bX;
            this._bY = bY;
            Shape.call(this, color);
        }
        Line.extends(Shape);

        Line.prototype.toString = function() {
            var result = "Line: ";
            result += "A(" + this._aX + ", " + this._aY + "), B(" + this._bX + ", " + this._bY + "), ";
            result += Shape.prototype.toString.call(this);

            return result;
        };

        return Line;
    })();

    var Segment = (function() {
        function Segment(aX, aY, bX, bY, color) {
            Line.call(this, aX, aY, bX, bY, color);
        }
        Segment.extends(Line);

        Segment.prototype.toString = function() {
            var result = "Segment: ";
            result += "A(" + this._aX + ", " + this._aY + "), B(" + this._bX + ", " + this._bY + "), ";
            result += Shape.prototype.toString.call(this);

            return result;
        };

        return Segment;
    })();

    return {
        Circle   : Circle,
        Rectangle: Rectangle,
        Triangle : Triangle,
        Line     : Line,
        Segment  : Segment
    }
})();

var circle = new shapeModulePrototypes.Circle(0, 0, 12, "#00FF00");
console.log(circle);
console.log(circle.toString());

var rectangle = new shapeModulePrototypes.Rectangle(0, 0, 2, 4, "AAA");
console.log(rectangle);
console.log(rectangle.toString());

var triangle = new shapeModulePrototypes.Triangle(0, 0, 1, 1, 5, 8, "ABC");
console.log(triangle)
console.log(triangle.toString());

var line = new shapeModulePrototypes.Line(0, 0, 1, 1, "A");
console.log(line);
console.log(line.toString());

var segment = new shapeModulePrototypes.Segment(0, 1, 2, 3, "S");
console.log(segment);
console.log(segment.toString());