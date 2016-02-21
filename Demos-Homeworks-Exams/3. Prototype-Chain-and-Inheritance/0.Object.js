var obj = {};
obj.name = 'My Object';
console.log(obj.hasOwnProperty('name')); // returns true
console.log(obj.hasOwnProperty('age')); // returns falseobj.hasOwnProperty('toString'); // returns false
console.log(obj.hasOwnProperty('toString')); // returns false