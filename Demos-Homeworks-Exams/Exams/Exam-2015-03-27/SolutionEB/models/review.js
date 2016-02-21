var imdb = imdb || {};

(function(scope) {
    'use strict';
    var id = 0;

    function Review(author, content, date) {
        //var review1 = imdb.getReview('Jiko Trapeca', 'Mnou qk film', new Date(2014, 9, 23));
        //have author (name of the author), content and date (creation date).
        id++;
        this._id = id;
        this.author = author;
        this.content = content;
        this.date = date;
    }

    scope.getReview = function getReview(author, content, date) {
        return new Review(author, content, date);
    };
    //model se podava gore vav funkciata pod imeto scope
}(imdb));