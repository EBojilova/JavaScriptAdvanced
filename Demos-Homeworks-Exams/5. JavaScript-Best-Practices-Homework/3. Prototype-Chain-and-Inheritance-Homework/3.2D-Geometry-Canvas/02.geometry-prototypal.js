"use strict";
var i,
    canvas,
    ctx,
    acceptedCharacters;

if (!Object.create) {
    Object.create = function(proto) {
        function F() {
        }

        F.prototype = proto;
        // sazdavame nov obekt sas podadenia prototip
        return new F();
    };
}

canvas = document.getElementById('myCanvas');
canvas.width = 700;
canvas.height = 500;
ctx = canvas.getContext("2d");

var shapesModulePrototypes = (function() {

    function validateArguments(args, requiredNumberOfArguments) {
        var areValidArguments = true;
        if (args.length !== requiredNumberOfArguments) {
            areValidArguments = false;

        }
        else {
            for (i = 0; i < requiredNumberOfArguments; i++) {
                if (typeof(args[i]) === 'undefined') {
                    areValidArguments = false;
                    break;
                }

                if (i !== requiredNumberOfArguments - 1 && (typeof(args[i]) !== 'number')) {
                    areValidArguments = false;
                    break;
                }
            }
        }
        if (!areValidArguments) {
            throw new Error('There is missing or incorrect argument!');
        }
    }

    function validateLineLength(line, description) {
        if (line <= 0) {
            throw new Error('The ' + description + 'must be positive number!');
        }
    }

    function validateHexColor(colorToCheck) {
        //http://stackoverflow.com/questions/9682709/regexp-matching-hex-color-syntax-and-shorten-form
        var regex = /^#(?:[0-9a-f]{3}){1,2}$/i;
        var isValidHexColour = regex.test(colorToCheck);

        if (!isValidHexColour) {
            throw new SyntaxError('Invalid color: color must be in hex format!');
        }
    }

    var shapePrototype = {
        constructor: function constructor(color) {
            validateHexColor(color);
            this._color = color;
        },
        toString   : function() {
            return "Color: " + this._color;
        },
        draw       : function() {
            ctx.beginPath();
            ctx.fillStyle = this._color;
        }
    };

    var circlePrototype = Object.create(shapePrototype);
    circlePrototype.constructor = function constructor(centerX, centerY, radius, color) {
        shapePrototype.constructor.call(this, color);
        validateArguments(arguments, 4);
        this._centerX = centerX;
        this._centerY = centerY;
        validateLineLength(radius, 'radius');
        this._radius = radius;
        return this
    };
    circlePrototype.toString = function() {
        var result = "Circle: ";
        result += "O(" + this._centerX + ", " + this._centerY + "), ";
        result += "Radius: " + this._radius + ", ";
        result += shapePrototype.toString.call(this);

        return result;
    };

    circlePrototype.draw = function() {
        shapePrototype.draw.call(this);
        ctx.arc(this._centerX, this._centerY, this._radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    };

    var rectanglePrototype = Object.create(shapePrototype);
    rectanglePrototype.constructor = function constructor(topLeftX, topLeftY, width, height, color) {
        shapePrototype.constructor.call(this, color);
        validateArguments(arguments, 5);
        this._topLeftX = topLeftX;
        this._topleftY = topLeftY;
        validateLineLength(width, 'width');
        this._width = width;
        validateLineLength(height, 'height');
        this._height = height;
    };
    rectanglePrototype.toString = function() {
        var result = "Rectangle: ";
        result += "Top-Left(" + this._topLeftX + ", " + this._topleftY + "), ";
        result += "Width: " + this._width + ", ";
        result += "Height: " + this._height + ", ";
        result += shapePrototype.toString.call(this);

        return result;
    };

    rectanglePrototype.draw = function() {
        shapePrototype.draw.call(this);
        ctx.rect(this._topLeftX, this._topleftY, this._width, this._height);
        ctx.fill();
        ctx.stroke();
    };

    var trianglePrototype = Object.create(shapePrototype);
    trianglePrototype.constructor = function constructor(aX, aY, bX, bY, cX, cY, color) {
        validateArguments(arguments, 7);
        validateTriangleVertices(aX, aY, bX, bY, cX, cY);
        shapePrototype.constructor.call(this, color);
        this._aX = aX;
        this._aY = aY;
        this._bX = bX;
        this._bY = bY;
        this._cX = cX;
        this._cY = cY;

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

        function getDistanceBetweenPoints(aX, aY, bX, bY) {
            var deltaX = aX - bX;
            var deltaY = aY - bY;

            var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            return distance;
        }
    };
    trianglePrototype.toString = function() {
        var result = "Triangle: ";
        result += "A(" + this._aX + ", " + this._aY + "), ";
        result += "B(" + this._bX + ", " + this._bY + "), ";
        result += "C(" + this._cX + ", " + this._cY + "), ";
        result += shapePrototype.toString.call(this);

        return result;
    };

    trianglePrototype.draw = function() {
        shapePrototype.draw.call(this);
        ctx.moveTo(this._aX, this._aY);
        ctx.lineTo(this._bX, this._bY);
        ctx.lineTo(this._cX, this._cY);
        ctx.lineTo(this._aX, this._aY);
        ctx.fill();
        ctx.stroke();
    };

    var linePrototype = Object.create(shapePrototype);
    linePrototype.constructor = function(aX, aY, bX, bY, color) {
        shapePrototype.constructor.call(this, color);
        validateArguments(arguments, 5);
        this._aX = aX;
        this._aY = aY;
        this._bX = bX;
        this._bY = bY;
    };
    linePrototype.toString = function() {
        var result = "Line: ";
        result += "A(" + this._aX + ", " + this._aY + "), ";
        result += "B(" + this._bX + ", " + this._bY + "), ";
        result += shapePrototype.toString.call(this);

        return result;
    };
    linePrototype.draw = function() {
        shapePrototype.draw.call(this);
        ctx.moveTo(this._aX, this._aY);
        ctx.lineTo(this._bX, this._bY);
        // set line color
        ctx.strokeStyle = this._color;
        //ctx.fill();
        ctx.stroke();
    };

    var segmentPrototype = Object.create(linePrototype);
    segmentPrototype.constructor = function(aX, aY, bX, bY, color) {
        linePrototype.constructor.call(this, aX, aY, bX, bY, color);
    };
    segmentPrototype.toString = function() {
        var result = "Segment: ";
        result += "A(" + this._aX + ", " + this._aY + "), ";
        result += "B(" + this._bX + ", " + this._bY + "), ";
        //result += shapePrototype.toString.call(this);
        result += Object.getPrototypeOf(linePrototype)
                        .toString
                        .call(this);

        return result;
    };
    segmentPrototype.draw = function() {
        linePrototype.draw.call(this);
    };

    return {
        circle   : circlePrototype,
        rectangle: rectanglePrototype,
        triangle : trianglePrototype,
        line     : linePrototype,
        segment  : segmentPrototype
    }
})();

var circle = Object.create(shapesModulePrototypes.circle);
console.log(circle);
circle.constructor(50, 50, 35, "#FF0000");
console.log(circle.toString());

var rect = Object.create(shapesModulePrototypes.rectangle);
console.log(rect);
rect.constructor(150, 150, 120, 80, "#FFFF00");
console.log(rect.toString());

var triangle = Object.create(shapesModulePrototypes.triangle);
console.log(triangle);
triangle.constructor(300, 200, 350, 250, 400, 210, "#33AABB");
console.log(triangle.toString());

var line = Object.create(shapesModulePrototypes.line);
console.log(line);
line.constructor(400, 50, 600, 70, "#FF0000");
console.log(line.toString());

var segment = Object.create(shapesModulePrototypes.segment);
console.log(segment);
segment.constructor(550, 100, 690, 70, "#123456");
console.log(segment.toString());

circle.draw();
rect.draw();
triangle.draw();
line.draw();
segment.draw();