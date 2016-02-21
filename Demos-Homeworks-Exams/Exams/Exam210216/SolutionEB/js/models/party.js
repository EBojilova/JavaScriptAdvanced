//TODO: Implement party module
var app = app || {};

(function(app) {
    // var saintValParty = new eventsSystem.party({
    //    title: 'Saint Valentines',
    //    type: 'party',
    //    duration: 6,
    //    date: new Date(2016, 1, 14, 19, 0),
    //    isBirthday: false,
    //    isCatered: false,
    //    organiser: mariya});
    //Party – Party is module, derived from Event (extends Event) and should have:
    function Party(options) {
        app.event.call(this, options);
        this.setIsBirthday(options.isBirthday);
        this.setIsCatered(options.isCatered);
        this.setOrganiser(options.organiser);
    }
    //    Properties:
    //o	_isBirthday – A boolean (converts truthy values to True and falsy to False)
    //o	_isCatered – A boolean (converts truthy values to True and falsy to False)
    //o	_organiser – A Employee object (only Employee instances)

    Party.extends(app.event);

    Party.prototype.checkIsBirthday = function() {
        return this._isBirthday;
    };

    Party.prototype.setIsBirthday = function(isBirthday) {
        //Validators.validateBoolean(isBirthday, "isBirthday");
        var bool = Boolean(isBirthday);
        this._isBirthday = bool;
    };

    Party.prototype.checkIsCatered = function() {
        return this._isCatered;
    };

    Party.prototype.setIsCatered = function(isCatered) {
        //Validators.validateBoolean(isCatered, "isCatered");
        var bool = Boolean(isCatered);
        this._isCatered = bool;
    };

    Party.prototype.getOrganiser = function() {
        return this._organiser;
    };

    Party.prototype.setOrganiser = function(organiser) {
        //Validators.validateInstance(estate, Estate, "estate");
        Validators.validateInstance(organiser, app.employee, "organiser");
        this._organiser = organiser;
    };

    app.party = Party;
}(app));