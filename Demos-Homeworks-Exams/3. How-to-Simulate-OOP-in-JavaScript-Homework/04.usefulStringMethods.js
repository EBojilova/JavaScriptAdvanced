String.prototype.startsWith = function(substring) {
    var substringLength = substring.length;

    if (substringLength > this.length) {
        return false;
    }
    var i;
    for (i = 0; i < substringLength; i += 1) {
        if (substring[i] !== this[i]) {
            return false;
        }
    }

    return true;
};

String.prototype.endsWith = function(substring) {
    var stringLength = this.length;
    var substringLength = substring.length;

    if (substringLength > stringLength) {
        return false;
    }

    var i;
    for (i = 0; i < substringLength; i += 1) {
        if (substring[substringLength - i] !== this[stringLength - i]) {
            return false;
        }
    }

    return true;
};

String.prototype.left = function(count) {
    var result = "";

    var stringLength = this.length;

    if (count >= stringLength || count < 0) {
        //http://stackoverflow.com/questions/5146591/javascript-wtf-a-string-prototypes-this-doesnt-return-a-string
        return String(this);
    }

    var i;
    for (i = 0; i < count; i += 1) {
        result += this[i];
    }

    return result;
};

String.prototype.right = function(count) {
    var result = "";

    var stringLength = this.length;

    if (count >= stringLength || count < 0) {
        return String(this);
    }

    var startIndex = stringLength - count;

    var i;
    for (i = stringLength - 1; i >= startIndex; i -= 1) {
        result = this[i] + result;
    }

    return result;
};

String.prototype.padLeft = function(count, character) {
    var result = "";

    count -= this.length;

    if (count <= 0) {
        return String(this);
    }

    if (character === undefined) {
        character = " ";
    }

    var i;
    for (i = 0; i < count; i += 1) {
        result += character;
    }

    return result+this;
};

String.prototype.padRight = function(count, character) {
    var result = "";

    count -= this.length;

    if (count <= 0) {
        return this.toString();
    }
    if (character === undefined) {
        character = " ";
    }

    var i;
    for (i = 0; i < count; i += 1) {
        result += character;
    }

    return String(this)+result;
};

String.prototype.repeat = function(count) {
    var result = "";

    var i;
    for (i = 0; i < count; i += 1) {
        result += this;
    }

    return result;
}

console.log("Problem 4. Useful String Methods");
var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));

console.log(example.endsWith("poses."));
console.log(example.endsWith("example"));
console.log(example.startsWith("something else"));

console.log(example.left(9));
console.log(example.left(90));

console.log(example.right(9));
console.log(example.right(90));

//Combinations must also work
example = "abcdefgh";
console.log(example.left(5)
                   .right(2));

var hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));

console.log(hello.padRight(5));
console.log(hello.padRight(10));
console.log(hello.padRight(5, "."));
console.log(hello.padRight(10, "."));
console.log(hello.padRight(2, "."));

var character = "*";
console.log(character.repeat(5));
// Alternative syntax
console.log("~".repeat(3));

// Another combination
console.log("*".repeat(5)
               .padLeft(10, "-")
               .padRight(15, "+"));

console.log("\n\n");