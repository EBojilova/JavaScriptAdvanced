var imdb = imdb || {};

(function(imdb) {
    var id = 0;

    var theatre = {
        init: function(name, length, rating, country, isPuppet) {
            imdb._Movie.init.call(this, name, length, rating, country);
            this.__proto__ = imdb._Movie;
            this._id = ++id;
            this.isPuppet = isPuppet;
        }
    };

    imdb.getTheatre = function(name, length, rating, country, isPuppet) {
        var t = Object.create(theatre);

        t.init(name, length, rating, country, isPuppet);
        return t;
    }
}(imdb));