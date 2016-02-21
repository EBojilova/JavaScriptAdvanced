//TODO: Implement trainer module
var app = app || {};

(function(app) {
    // var pesho = new eventsSystem.trainer('Pesho', 20);
    function Trainer(name, workHours) {
        //Properties:
        //o	All parent properties
        //o	courses  – A visible empty array (filled with Course instances only)
        //o	feedbacks – A visible empty array (filled with strings only)
        app.employee.call(this, name, workHours);
        this.courses = [];
        this.feedbacks = [];
    }

    Trainer.extends(app.employee);

    //o	addFeedback – adds a new feedback(string) to the property feedbacks and validates that the given value is a string
    Trainer.prototype.addFeedback = function(feedback) {
        Validators.validateString(feedback, "feedback");
        this.feedbacks.push(feedback);
    };

    //o	addCourse – adds a new Course to the property courses and validates that the given value is a Course instance
    Trainer.prototype.addCourse = function(course) {
        Validators.validateInstance(course, app.course, "course");
        this.courses.push(course);
    };

    app.trainer = Trainer;
}(app));