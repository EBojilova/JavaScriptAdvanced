var imdb = imdb || {};

(function(scope) {
    'use strict';
    var id = 0;

    function Genre(name) {
        //genreAction = imdb.getGenre('Action');
        id++;
        this._id = id;
        this.name = name;
        this._movies = [];
    }

    //Genre should have:
    // name
    // collection of movies. HIDDEN.
    // functions:
    //o	addMovie – Adds movie in movies collection, i.e. genreComedy.addMovie(theatreInsurgent);
    //o	deleteMovie – Deletes movie from movies collection
    //o	deleteMovieById – Deletes movie from movies collection by given id
    //o	getMovies – Returns movies collection

    Genre.prototype.addMovie = function addMovie(movie) {
        this._movies.push(movie);
    };
    Genre.prototype.getMovies = function getMovies() {
        return this._movies;
    };

    Genre.prototype.deleteMovie = function deleteMovie(movieToDelete) {
        //var index = this._movies.indexOf(movie);
        //if (index > -1) {
        //    this._movies.splice(index, 1);
        //}
        this._movies = this._movies.filter(function(movie) {
            return movie !== movieToDelete;
        })

    };
    Genre.prototype.deleteMovieById = function deleteMovieById(id) {
        //var movie = this._movies.filter(function(movie) {
        //    return movie._id === id;
        //})[0];
        //if (movie) {
        //    this.deleteMovie(movie);
        //}
        this._movies = this._movies.filter(function(movie) {
            return movie._id !== id;
        })
    };

    scope.getGenre = function getGenre(name) {
        return new Genre(name);
    };
    //model se podava gore vav funkciata pod imeto scope
}(imdb));