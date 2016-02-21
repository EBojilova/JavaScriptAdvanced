var imdb = imdb || {};

(function(scope) {
    'use strict';
    var id = 0;

    function Movie(title, length, rating, country) {
        //movieGodfather = imdb.getMovie('The Godfather', 220, 9.1, 'USA');
        id++;
        this._id = id;
        this.title = title;
        this.length = length;
        this.rating = rating;
        this.country = country;
        this._actors = [];
        this._reviews = [];
    }

    //Movie should have:
    // title,
    // length (in minutes),
    // rating (from 1 to 10)
    // country
    // collection of actors HIDDEN
    // collection of reviews. HIDDEN
    // functions:
    //o	addActor – Adds actor in actors collection
    //o	getActors – Returns actors collection
    //o	addReview – Adds review in reviews collection
    //o	deleteReview – Deletes review from reviews collection
    //o	deteleReviewById – Deletes review from reviews collection by given id
    //o	getReviews – Returns reviews collection

    Movie.prototype.addActor = function addActor(actor) {
        this._actors.push(actor);
    };
    Movie.prototype.getActors = function getActors() {
        return this._actors;
    };

    Movie.prototype.addReview = function addReview(review) {
        this._reviews.push(review);
    };
    Movie.prototype.getReviews = function getReviews() {
        return this._reviews;
    };
    Movie.prototype.deleteReview = function deleteReview(reviewToBeDeleted) {
        this._reviews = this._reviews.filter(function(review) {
            return review !== reviewToBeDeleted;
        });
        //var index = this._reviews.indexOf(review);
        //if (index > -1) {
        //    this._reviews.splice(index, 1);
        //}

    };

    Movie.prototype.deteleReviewById = function deleteReviewById(id) {
        //var review = this._reviews.filter(function(review) {
        //    return review._id === id;
        //})[0];
        //if (review) {
        //    this.deleteReview(review);
        //}
        this._reviews = this._reviews.filter(function(review) {
            return review._id !== id;
        });
    };

    scope._Movie = Movie;

    scope.getMovie = function getMovie(title, length, rating, country) {
        return new Movie(title, length, rating, country);
    };
    //model se podava gore vav funkciata pod imeto scope
}(imdb));