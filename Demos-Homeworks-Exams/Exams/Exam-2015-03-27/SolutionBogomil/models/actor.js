var imdb = imdb || {};

(function(imdb) {
    var id = 0;
    var actor = {
        init: function init(name, bio, born) {
            this._id = ++id;
            this.name = name;
            this.bio = bio;
            this.born = born;
        }
    };

    imdb.getActor = function(name, bio, born) {
        var a = Object.create(actor);
        a.init(name, bio, born);
        return a;
    }
}(imdb));