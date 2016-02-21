var imdb = imdb || {};


(function(scope) {
    'use strict';
    var id = 0;

    function Actor(name, bio, born) {
        //var actor1 = imdb.getActor('Jack Nicholson', 'Jack Nicholson, an American actor, producer, screenwriter and director, is a three-time Academy Award winner and 12-time nominee.', new Date(1937, 4, 22));
        //should have name, bio (biography) and born (date of birth).
        id++;
        this._id = id;
        this.name = name;
        this.bio = bio;
        this.born = born;
    }

    scope.getActor = function getActor(name, bio, born) {
        return new Actor(name, bio, born);
    };
    //model se podava gore vav funkciata pod imeto scope
}(imdb));

