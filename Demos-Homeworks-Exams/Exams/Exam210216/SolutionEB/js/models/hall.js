//TODO: Implement hall module
var app = app || {};

(function(app) {
    // var openSource = new eventsSystem.hall('Open Source', 110);
    function Hall(name, capacity) {
        //Properties:
        //o	_name – A string (only letters and whitespace)
        //o	_capacity – A number (only digits)
        //o	parties – A visible empty array (filled with Party instances only)
        //o	lectures – A visible empty array(filled with Lecture instances only)
        this.setName(name);
        this.setCapacity(capacity);
        this.parties = [];
        this.lectures = [];
    }

    Hall.prototype.getName = function() {
        return this._name;
    };

    Hall.prototype.setName = function(name) {
        Validators.validateString(name, "name");
        this._name = name;
    };

    Hall.prototype.getCapacity = function() {
        return this._capacity;
    };

    Hall.prototype.setCapacity = function(capacity) {
        Validators.validateInteger(capacity, 'capacity');
        this._capacity = capacity;
    };
    //addEvent – Adds a new event (Party/Lecture) to the corresponding property (parties or lectures).
    // The method checks whether the event is a Party or a Lecture and stores it in the respecting property
    Hall.prototype.addEvent = function(event) {
        if (event instanceof app.party) {
            this.parties.push(event);
        }
        else if(event instanceof app.lecture){
            this.lectures.push(event);
        }
        else{
            throw new Error(event + " should be a Party or a Lecture.");
        }
    };

    app.hall = Hall;
}(app));