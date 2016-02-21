// Object create - polyfill
// v po-starite browsers ne sastestvuva Object.create
if (!Object.create) {
    Object.create = function(proto) {
        function F() {
        }

        F.prototype = proto;
        return new F;
    };
}

// Object create - polyfill with optimizations
if (typeof Object.create != 'function') {
    Object.create = (function() {
        var Temp = function() {
        };
        return function(prototype) {
            if (arguments.length > 1) {
                throw Error('Second argument not supported');
            }
            if (typeof prototype != 'object') {
                throw TypeError('Argument must be an object');
            }
            Temp.prototype = prototype;
            var result = new Temp();
            Temp.prototype = null;
            return result;
        };
    })();
}

// Pseudo-classical inheritance - extends method- po-dobre e s Function-vij otdolo
Object.prototype.extends = function(parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.init = this;
};

// taka go pravim za da moje da e preizpolzvaemo. Moje i da go napravim s Object.prototype.extends
Function.prototype.extends = function(parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.init = this;
};

// Prototypal inheritance - extends method
Object.prototype.extends = function(properties) {
    function F() {
    }

    var prop;
    F.prototype = Object.create(this);
    for (prop in properties) {
        // TODO: to check which one i s correct
        //if (properties.hasOwnProperty(prop)) {
        //    F.prototype[prop] = properties[prop];
        //}
        F.prototype[prop] = properties[prop];
    }

    F.prototype._super = this;
    return new F();
};
