function PersonCahing(name) {
    var self = this;
    self._name = name;
    self.getName = function getPersonName() {
        return self._name;
    }
}
var p = new PersonCahing("Peter");
console.log(p);
var getPersonName = p.getName;
console.log(getPersonName()); // Logs: Peter

function Person(name) {
    this._name = name;
    this.getName = function getPersonName() {
        return this._name;
    }
}
var p2 = new Person("Peter");
console.log(p2);
var getPersonName2 = p.getName;
console.log(getPersonName2()); // Logs: Peter
