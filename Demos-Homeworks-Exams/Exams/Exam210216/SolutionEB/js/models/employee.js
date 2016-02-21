//TODO: Implement employee module
var app = app || {};

(function(app) {
    // var mariya = new eventsSystem.employee('Mariya', 40);
    function Employee(name, workHours) {
        //Properties:
        //o	_name – A string (only letters and whitespace)
        //o	_workHours – A number (only digits)
        this.setName(name);
        this.setWorkhours(workHours);
    }

    Employee.prototype.getName = function() {
        return this._name;
    };

    Employee.prototype.setName = function(name) {
        Validators.validateString(name, "name");
        this._name = name;
    };

    Employee.prototype.getWorkhours = function() {
        return this._workHours;
    };

    Employee.prototype.setWorkhours = function(workHours) {
        Validators.validateInteger(workHours, 'workHours');
        this._workHours = workHours;
    };

    app.employee = Employee;
}(app));