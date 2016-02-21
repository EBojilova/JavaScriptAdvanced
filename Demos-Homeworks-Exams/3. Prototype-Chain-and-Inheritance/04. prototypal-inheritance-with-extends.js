Object.prototype.extends = function(properties) {
    function f() {
    }
    
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
    f.prototype = Object.create(this);
    for (var prop in properties) {
        f.prototype[prop] = properties[prop];
    }
    // this e parent i ._super ste ni dade dostap do roditelia
    f.prototype._super = this;
    return new f();
}

var personPrototype = {
    init: function constructor(name, age) {
        this.name = name;
        this.age = age;
        return this;
    },
    
    introduce: function introduce() {
        return 'I\'m ' + this.name + ", Age: " + this.age;
    }
};

var studentPrototype = personPrototype.extends({
                                                   init: function constructor(name, age, grade) {
                                                       this._super.init.call(this, name, age);
                                                       // this._super.init(name, age); - name and age do not display in object
                                                       // personPrototype.init.call(this, name, age); - Working
        
                                                       this.grade = grade;
                                                       return this;
                                                   },
    
                                                   introduce: function introduce() {
                                                       return this._super.introduce.call(this) + ", Grade: " + this.grade;
                                                   }
                                               });
console.log('personPrototype')
console.log(personPrototype)
console.log('studentPrototype')
console.log(studentPrototype)
console.log('var a = Object.create(personPrototype).init("Niko", 11);')
var a = Object.create(personPrototype).init("Niko", 11);
console.log(a);
console.log(a.introduce());
console.log('var p = Object.create(studentPrototype).init("Pesho", 13, 2);')
var p = Object.create(studentPrototype).init("Pesho", 13, 2);
console.log(p);
console.log(p.introduce());

