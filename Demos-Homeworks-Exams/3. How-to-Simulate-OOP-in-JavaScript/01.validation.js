var Person = (function personIIFE() {
    function Person() {
        this._name = 'Default NAME';

    }
    // taka se pravi validacia, no po princip riadko se polzva
    Person.prototype.name = function(value) {
        if (value) {
            this._name = value;
        }

        return this._name;

    };
    return Person;
})();

var minka = new Person();
minka.name('Minka');
var pesho= new Person();
pesho.name();
console.log(minka.name());
console.log(pesho.name());
