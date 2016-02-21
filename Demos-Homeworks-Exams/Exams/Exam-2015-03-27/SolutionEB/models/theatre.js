var imdb = imdb || {};

(function(scope) {
    'use strict';
    //var id = 0;

    function Theatre(name, length, rating, country, isPuppet) {
        //theatreInsurgent = imdb.getTheatre('Insurgent', 103, 8.6, 'Romania');
        //should have name, length (in minutes), rating (from 1 to 10), country and isPuppet.
        scope._Movie.call(this, name, length, rating, country);
        this.isPuppet = isPuppet;
    }

    Theatre.extends(scope._Movie);

    scope.getTheatre = function getTheatre(name, length, rating, country, isPuppet) {
        return new Theatre(name, length, rating, country, isPuppet);
    };
}(imdb));