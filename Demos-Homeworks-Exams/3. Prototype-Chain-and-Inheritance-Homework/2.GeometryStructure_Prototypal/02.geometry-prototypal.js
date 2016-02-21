var shapesModulePrototypes = (function() {
    var shapePrototype = {
        constructor: function constructor(color) {
            this._color = color;
        },
        toString   : function() {
            return "Color: " + this._color;
        }
    }

    if (!Object.create) {
        Object.create = function(proto) {
            function F() {
            }

            F.prototype = proto;
            // sazdavame nov obekt sas podadenia prototip
            return new F();
        };
    }

    var circlePrototype = Object.create(shapePrototype);
    circlePrototype.constructor = function constructor(centerX, centerY, radius, color) {
        shapePrototype.constructor.call(this, color);
        this._centerX = centerX;
        this._centerY = centerY;
        this._radius = radius;
        return this;
    };
    circlePrototype.toString = function() {
        var result = "Circle: ";
        result += "O(" + this._centerX + ", " + this._centerY + "), ";
        result += "Radius: " + this._radius + ", ";
        result += shapePrototype.toString.call(this);

        return result;
    };

    var rectanglePrototype = Object.create(shapePrototype);
    rectanglePrototype.constructor = function constructor(topLeftX, topLeftY, width, height, color) {
        shapePrototype.constructor.call(this, color);
        this._topLeftX = topLeftX;
        this._topleftY = topLeftY;
        this._width = width;
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

    var trianglePrototype = Object.create(shapePrototype);
    trianglePrototype.constructor = function constructor(aX, aY, bX, bY, cX, cY, color) {
        shapePrototype.constructor.call(this, color);
        this._aX = aX;
        this._aY = aY;
        this._bX = bX;
        this._bY = bY;
        this._cX = cX;
        this._cY = cY;
    };
    trianglePrototype.toString = function() {
        var result = "Triangle: ";
        result += "A(" + this._aX + ", " + this._aY + "), ";
        result += "B(" + this._bX + ", " + this._bY + "), ";
        result += "C(" + this._cX + ", " + this._cY + "), ";
        result += shapePrototype.toString.call(this);

        return result;
    };

    var linePrototype = Object.create(shapePrototype);
    linePrototype.constructor = function(aX, aY, bX, bY, color) {
        shapePrototype.constructor.call(this, color);
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
circle.constructor(0, 0, 15, "AAA");
console.log(circle.toString());

var rect = Object.create(shapesModulePrototypes.rectangle);
console.log(rect);
rect.constructor(0, 0, 15, 10, "BBB");
console.log(rect.toString());

var triangle = Object.create(shapesModulePrototypes.triangle);
console.log(triangle);
triangle.constructor(0, 0, 1, 1, 5, 10, "CCC");
console.log(triangle.toString());

var line = Object.create(shapesModulePrototypes.line);
console.log(line);
line.constructor(0, 0, 3, 5, "DDD");
console.log(line.toString());

var segment = Object.create(shapesModulePrototypes.segment);
console.log(segment);
segment.constructor(1, 1, 10, 20, "EEE");
console.log(segment.toString());