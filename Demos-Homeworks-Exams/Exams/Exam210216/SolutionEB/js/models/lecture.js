//TODO: Implement lecture module
var app = app || {};

(function(app) {
    //var examPractice = new eventsSystem.lecture({
    //    title: 'Advanced JS Exam Practice',
    //    type: 'lecture',
    //    duration: 4,
    //    date: new Date(2016, 1, 17, 18, 0),
    //    course: advancedJs,
    //    trainer: pesho});
    //Lecture – Lecture is module, derived from Event (extends Event) and should have:
    function Lecture(options) {
        app.event.call(this, options);
        this.setCourse(options.course);
        this.setTrainer(options.trainer);
    }
    //    Properties:
    //o	All parent properties
    //o	_trainer – A Trainer object (only Trainer instances)
    //o	_course – A Course object (only Course instances)

    Lecture.extends(app.event);

    Lecture.prototype.getCourse = function() {
        return this._course;
    };

    Lecture.prototype.setCourse = function(course) {
        //Validators.validateInstance(estate, Estate, "estate");
        Validators.validateInstance(course, app.course, "course");
        this._course = course;
    };

    Lecture.prototype.getTrainer = function() {
        return this._trainer;
    };

    Lecture.prototype.setTrainer = function(trainer) {
        //Validators.validateInstance(estate, Estate, "estate");
        Validators.validateInstance(trainer, app.trainer, "trainer");
        this._trainer = trainer;
    };

    app.lecture = Lecture;
}(app));