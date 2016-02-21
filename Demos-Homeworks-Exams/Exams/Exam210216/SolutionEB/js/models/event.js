//TODO: Implement event module
var app = app || {};

(function(app) {
    //var examPractice = new eventsSystem.lecture({
    //    title: 'Advanced JS Exam Practice',
    //    type: 'lecture',
    //    duration: 4,
    //    date: new Date(2016, 1, 17, 18, 0),
    //    course: advancedJs,
    //    trainer: pesho});

    function Event(options) {
        //Event – Event is an abstract (no initialization should be possible with this module) module and should have:
        //if (this.constructor === Event) {
        //    throw new Error("Can't instantiate abstract class Event.");
        //}
        //Properties:
        //o _title – A string (only letters and whitespace)
        //o	_type – A string (only letters and whitespace)
        //o	_duration – A number (only digits)
        //o	_date – A Date object (only Date instances)
        this.setTitle(options.title);
        this.setType(options.type);
        this.setDuration(options.duration);
        this.setDate(options.date);
    }
    
    Event.prototype.getTitle = function() {
        return this._title;
    };
    
    Event.prototype.setTitle = function(title) {
        Validators.validateString(title, "title");
        this._title = title;
    };
    
    Event.prototype.getType = function() {
        return this._type;
    };
    
    Event.prototype.setType = function(type) {
        Validators.validateString(type, "type");
        this._type = type;
    };

    Event.prototype.getDuration = function() {
        return this._duration;
    };

    Event.prototype.setDuration = function(duration) {
        Validators.validateInteger(duration, 'duration');
        this._duration = duration;
    };
    
    Event.prototype.getDate = function() {
        return this._date;
    };
    
    Event.prototype.setDate = function(date) {
        //Validators.validateInstance(estate, Estate, "estate");
        //A Date object (only Date instances)
        Validators.validateInstance(date, Date, "date");
        this._date = date;
    };

    app.event = Event;
}(app));