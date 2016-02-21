//TODO: Implement course module
var app = app || {};

(function(app) {
    //var advancedJs = new eventsSystem.course('Advanced JS', 12);
    function Course(name, numberOfLectures) {
        //Properties:
        //o	_name – A string (only letters and whitespace)
        //o	_numberOfLectures – A number (only digits)
        this.setName(name);
        this.setNumberOfLectures(numberOfLectures);
    }
    
    Course.prototype.getName = function() {
        return this._name;
    };
    
    Course.prototype.setName = function(name) {
        Validators.validateString(name, "name");
        this._name = name;
    };
    
    Course.prototype.getNumberOfLectures = function() {
        return this._numberOfLectures;
    };
    
    Course.prototype.setNumberOfLectures = function(numberOfLectures) {
        Validators.validateInteger(numberOfLectures,'numberOfLectures');
        this._numberOfLectures = numberOfLectures;
    };
    
    app.course = Course;
}(app));