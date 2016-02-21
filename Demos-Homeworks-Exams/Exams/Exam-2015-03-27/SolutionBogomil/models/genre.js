var imdb = imdb || {};

(function (imdb) {
    var id = 0;
    var genre = {
        init: function (name) {
            this._id = ++id;
            this.name = name;
            this._movies = [];
        },
        addMovie: function addMovie(movie) {
            this._movies.push(movie)
        },
        deleteMovie: function deleteMovie(movie) {
            this._movies = this._movies.filter(function (m) {
                return m !== movie;
            })
        },
        getMovies: function () {
            return this._movies;
        }
    };

    imdb.getGenre = function(name) {
        var g = Object.create(genre);
        g.init(name);
        return g;
    }
}(imdb));