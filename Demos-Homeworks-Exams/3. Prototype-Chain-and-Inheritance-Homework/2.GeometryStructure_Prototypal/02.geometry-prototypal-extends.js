Object.prototype.extend = function(properties) {
    function f() {
    }
    // v po-starite browsers ne sastestvuva Object.create
    if (!Object.create) {
        Object.create = function(proto) {
            function F() {
            }

            F.prototype = proto;
            // sazdavame nov obekt sas prototipa
            return new F();
        };
    }
    f.prototype = Object.create(this);
    for (var prop in properties) {
        f.prototype[prop] = properties[prop];
    }
    f.prototype._super = this;
    return new f();
}

var shapesModulePrototypes = (function() {
    var shapePrototype = {
        constructor    : function constructor(color) {
            this._color = color;
        },
        toString: function() {
            return "Color: " + this._color;
        }
    };

    var circle = shapePrototype.extend({
                                  constructor    : function constructor(centerX, centerY, radius, color) {
                                      this._super.constructor(color);
                                      this._centerX = centerX;
                                      this._centerY = centerY;
                                      this._radius = radius;
                                  },
                                  toString: function() {
                                      var result = "Circle: ";
                                      result += "O(" + this._centerX + ", " + this._centerY + "), ";
                                      result += "Radius: " + this._radius + ", ";
                                      result += this._super.toString();

                                      return result;
                                  }
                              });

    var rectanglePrototype = shapePrototype.extend({
                                     constructor    : function constructor(topLeftX, topLeftY, width, height, color) {
                                         this._super.constructor(color);
                                         this._topLeftX = topLeftX;
                                         this._topleftY = topLeftY;
                                         this._width = width;
                                         this._height = height;
                                     },
                                     toString: function() {
                                         var result = "Rectangle: ";
                                         result += "Top-Left(" + this._topLeftX + ", " + this._topleftY + "), ";
                                         result += "Width: " + this._width + ", ";
                                         result += "Height: " + this._height + ", ";
                                         result += this._super.toString();

                                         return result;
                                     }
                                 });

    var trianglePrototype = shapePrototype.extend({
                                    constructor    : function constructor(aX, aY, bX, bY, cX, cY, color) {
                                        this._super.constructor(color);
                                        this._aX = aX;
                                        this._aY = aY;
                                        this._bX = bX;
                                        this._bY = bY;
                                        this._cX = cX;
                                        this._cY = cY;
                                    },
                                    toString: function() {
                                        var result = "Triangle: ";
                                        result += "A(" + this._aX + ", " + this._aY + "), ";
                                        result += "B(" + this._bX + ", " + this._bY + "), ";
                                        result += "C(" + this._cX + ", " + this._cY + "), ";
                                        result += this._super.toString();

                                        return result;
                                    }
                                });

    var linePrototype = shapePrototype.extend({
                                constructor    : function(aX, aY, bX, bY, color) {
                                    this._super.constructor(color);
                                    this._aX = aX;
                                    this._aY = aY;
                                    this._bX = bX;
                                    this._bY = bY;
                                },
                                toString: function() {
                                    var result = "Line: ";
                                    result += "A(" + this._aX + ", " + this._aY + "), ";
                                    result += "B(" + this._bX + ", " + this._bY + "), ";
                                    result += this._super.toString();

                                    return result;
                                }
                            });

    var segmentPrototype = linePrototype.extend({
                                  constructor    : function(aX, aY, bX, bY, color) {
                                      this._super.constructor(aX, aY, bX, bY, color);
                                  },
                                  toString: function() {
                                      var result = "Segment: ";
                                      result += "A(" + this._aX + ", " + this._aY + "), ";
                                      result += "B(" + this._bX + ", " + this._bY + "), ";
                                      result += this._super._super.toString();

                                      return result;
                                  }
                              });

    return {
        circle   : circle,
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