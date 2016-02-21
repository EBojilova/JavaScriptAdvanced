//TODO: Add extension method if you need

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

Function.prototype.extends = function(parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.init = this;
};

var Validators = {

    validateNonEmptyString: function(value, variableName) {
        if (typeof (value) != 'string' || !value) {
            throw new Error(variableName + " should be non-empty string.");
        }
    },

    validateString: function(string) {
        //A string (only letters and whitespace)
        var regex = /[a-zA-Z\s]+/i;
        var isOnlyLetters = regex.test(string);

        if (!isOnlyLetters) {
            throw new SyntaxError('Invalid color: color must be in hex format!');
        }
    },

    validateInteger: function(value, variableName) {
        //TODO: A number (only digits)
        if (typeof (value) != 'number') {
            throw new Error(variableName + " should be a number.");
        }
        if (value !== parseInt(value, 10)) {
            throw new Error(variableName + " should be integer.");
        }
    },

    validateBoolean: function(value, variableName) {
        if (typeof (value) != 'boolean') {
            throw new Error(variableName + " should be a boolean value.");
        }
    },

    validateInstance: function(value, className, variableName) {
        if (!(value instanceof className)) {
            throw new Error(variableName + " should be non-empty " +
                className.prototype.constructor.name + ".");
        }
    }
}