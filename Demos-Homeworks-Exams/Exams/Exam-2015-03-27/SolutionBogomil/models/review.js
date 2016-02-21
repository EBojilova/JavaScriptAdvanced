var imdb = imdb || {};

(function(imdb) {
    var id = 0;

    var review = {
        init: function(author, content, date) {
            this._id = ++id;
            this.author = author;
            this.content = content;
            this.date = date;
        }
    }

    imdb.getReview = function(author, content, date) {
        var r = Object.create(review);
        r.init(author, content, date);
        return r;
    }
}(imdb));