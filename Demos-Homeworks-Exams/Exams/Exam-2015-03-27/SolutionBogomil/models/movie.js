var imdb = imdb || {};

(function (imdb) {
    var id = 0;
    var movie = {
        init: function (title, length, rating, country) {
            this._id = ++id;
            this.title = title;
            this.length = length;
            this.rating = rating;
            this.country = country;
            this._actors = [];
            this._reviews = [];
        },
        addActor: function addActor(actor) {
            this._actors.push(actor);
        },
        getActors: function getActors() {
            return this._actors;
        },
        addReview: function addReview(review) {
            this._reviews.push(review);
        },
        getReviews: function getReviews() {
            return this._reviews;
        },
        deleteReview: function deleteReview(review) {
            this._reviews = this._reviews.filter(function (r) {
                return review === r;
            })
        },
        deleteActor: function deleteActor(actor) {
            this._actors = this._actors.filter(function (a) {
                return actor === a;
            })
        }
    };

    imdb._Movie = movie;
    imdb.getMovie = function (title, length, rating, country) {
        var m = Object.create(movie);
        m.init(title, length, rating, country);
        return m;
    }
}(imdb));