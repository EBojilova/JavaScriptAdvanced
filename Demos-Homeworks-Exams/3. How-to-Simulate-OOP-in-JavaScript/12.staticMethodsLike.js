var Rect = (function() {
    function Rect(width, height) {
        this.width = width;
        this.height = height;
    }

    Rect.prototype.calculateArea = function() {
    };

    //Works as a static method. Invoked through the class, not through the instances.
    //Should not access this.
    Rect.isSquare = function(rect) {
        return rect.width === rect.height;
    };

    return Rect;
}());

var rect = new Rect(2, 2);
console.log(rect);
console.log(Rect.isSquare);
// podavame bez call, tai kato e statichen method i niama v nego this
console.log(Rect.isSquare(rect));

