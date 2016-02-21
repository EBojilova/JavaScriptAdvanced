var dogPrototype = {
    constructor: function() {
        this._name = 'Default name';
        this._color = 'Default color';
    },

    setName: function setDogName(name) {
        this._name = name;
        return this; // required for method chaining
    },

    setColor: function setDogColor(color) {
        this._color = color;
        return this; // required for method chaining
    },

    setGender: function setDogGender(gender) {
        this._gender = gender;
        return this; // required for method chaining
    }
}

console.log('Method Chaining- prototype');
var doggy = Object.create(dogPrototype)
                  .setName('Fluffy')
                  .setColor('purple')
                  .setGender('male');
console.log(doggy); // { _name: 'Fluffy', _color: 'purple', _gender: 'male' }