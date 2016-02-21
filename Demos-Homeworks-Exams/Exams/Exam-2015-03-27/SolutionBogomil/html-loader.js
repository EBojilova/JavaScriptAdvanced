var imdb = imdb || {};

(function(scope) {
    var moviesContainer  = document.getElementById('movies'),
        detailsContainer = document.getElementById('details');

    function loadHtml(selector, data) {
        var container = document.querySelector(selector),
            genresUl  = loadGenres(data);

        container.appendChild(genresUl);
    }

    function loadGenres(genres) {
        'use strict';
        var genresUl = document.createElement('ul');
        genresUl.setAttribute('class', 'nav navbar-nav');
        genres.forEach(function(genre) {
            var liGenre = document.createElement('li');
            liGenre.innerHTML = genre.name;
            liGenre.setAttribute('data-id', genre._id);
            liGenre.addEventListener('click', function(ev) {

                var moviesHtml = loadMovies(genre);

                while (moviesContainer.firstChild) {
                    moviesContainer.removeChild(moviesContainer.firstChild);
                }

                while (detailsContainer.firstChild) {
                    detailsContainer.removeChild(detailsContainer.firstChild);
                }
                moviesContainer.appendChild(moviesHtml);
                moviesContainer.setAttribute('data-genre-id', genre._id);

            });
            genresUl.appendChild(liGenre);
        });

        return genresUl;
    }

    function loadMovies(genre) {
        var fragment = document.createDocumentFragment();
        var movies = genre.getMovies();
        var moviesUl = document.createElement('ul');
        movies.forEach(function(movie) {
            var liMovie = document.createElement('li');
            liMovie.setAttribute('data-id', movie._id);

            liMovie.innerHTML = '<h3>' + movie.title + '</h3>';
            liMovie.innerHTML += '<div>Country: ' + movie.country + '</div>';
            liMovie.innerHTML += '<div>Time: ' + movie.length + '</div>';
            liMovie.innerHTML += '<div>Rating: ' + movie.rating + '</div>';
            liMovie.innerHTML += '<div>Actors: ' + movie._actors.length + '</div>';
            liMovie.innerHTML += '<div>Reviews: ' + movie._reviews.length + '</div>';
            var deleteBtn = document.createElement('button');
            deleteBtn.value = 'Delete';
            deleteBtn.innerText = 'Delete movie';
            var movieNotDeleted = true;
            deleteBtn.addEventListener('click', function() {
                genre.deleteMovie(movie);
                var details = document.getElementById('details');
                while (details.firstChild) {
                    details.removeChild(details.firstChild);
                }
                this.parentElement.parentElement.removeChild(this.parentElement);
                movieNotDeleted = false;

            });
            liMovie.appendChild(deleteBtn);
            liMovie.addEventListener('click', function() {
                if (movieNotDeleted) {

                    while (detailsContainer.firstChild) {
                        detailsContainer.removeChild(detailsContainer.firstChild);
                    }

                    var actorsFragment = getActorsDOM(movie);
                    detailsContainer.appendChild(actorsFragment);

                    var reviewsFragment = getReviewsDOM(movie);
                    detailsContainer.appendChild(reviewsFragment);
                }
            });
            fragment.appendChild(liMovie);
            moviesUl.appendChild(fragment);
        });

        return moviesUl;
    }

    function getActorsDOM(movie) {
        var actorsFragment = document.createDocumentFragment();
        var actorsHeading = document.createElement('h3');
        actorsHeading.innerText = 'Actors:';
        var actorsUl = getActorsUL(movie);
        actorsFragment.appendChild(actorsHeading);
        actorsFragment.appendChild(actorsUl);
        return actorsFragment
    }

    function getActorsUL(movie) {
        var actorsUl = document.createElement('ul');

        var actors = movie.getActors();
        actors.forEach(function(actor) {
            var fragment = document.createDocumentFragment();
            var li = document.createElement('li');
            var h5 = document.createElement('h5');
            h5.innerText = actor.name;
            var paragraph = document.createElement('p');
            paragraph.innerHTML = '<strong>Bio</strong>: ' + actor.bio + '<br/>' + '<strong>Born: </strong>' + actor.born;

            li.appendChild(h5);
            li.appendChild(paragraph);
            fragment.appendChild(li);
            actorsUl.appendChild(fragment);
        });
        return actorsUl
    }

    function getReviewsDOM(movie) {
        'use strict';
        var reviewsFragment = document.createDocumentFragment();
        var reviewsHeading = document.createElement('h3');
        reviewsHeading.innerText = 'Reviews:';

        var reviewsUl = getReviewsUL(movie);
        reviewsFragment.appendChild(reviewsHeading);
        reviewsFragment.appendChild(reviewsUl);
        return reviewsFragment
    }

    function getReviewsUL(movie) {
        var reviewsUl = document.createElement('ul');

        var reviews = movie.getReviews();
        reviews.forEach(function(review) {
            var fragment = document.createDocumentFragment();
            var li = document.createElement('li');
            var h5 = document.createElement('h5');
            h5.innerText = review.author;
            var paragraph = document.createElement('p');
            paragraph.innerHTML = '<strong>Bio</strong>: ' + review.content + '<br/>' + '<strong>Born: </strong>' + review.date;
            var deleteBtn = document.createElement('button');
            deleteBtn.value = 'Delete';
            deleteBtn.innerText = 'Delete review';
            deleteBtn.addEventListener('click', function() {
                movie.deleteReview(review);
                this.parentElement.parentElement.removeChild(this.parentElement);
            });

            li.appendChild(h5);
            li.appendChild(paragraph);
            li.appendChild(deleteBtn);
            fragment.appendChild(li);
            reviewsUl.appendChild(fragment);
        });
        return reviewsUl
    }

    scope.loadHtml = loadHtml;
}(imdb));