var imdb = imdb || {};

(function(scope) {
    'use strict';
    var _movies = [];

    function loadHtml(genreSelector, genres) {
        var container        = document.querySelector(genreSelector),
            moviesContainer  = document.getElementById('movies'),
            detailsContainer = document.getElementById('details'),
            genresUl         = loadGenres(genres);

        container.appendChild(genresUl);

        genresUl.addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                var genreId = parseInt(event.target.getAttribute('data-id'));
                var genre = genres.filter(function(genre) {
                    return genre._id === genreId;
                })[0];

                moviesContainer.setAttribute('data-genre-id', genreId);
                var moviesHtml;
                //var itemsDiv = document.getElementById('items');
                if (moviesContainer.innerHTML === '') {
                    moviesHtml = loadMovies(genre.getMovies());
                    moviesContainer.innerHTML = moviesHtml.outerHTML;
                }
                else {
                    moviesContainer.innerHTML = '';
                    detailsContainer.innerHTML = '';
                }
            }
        });

        // Task 2 - Add event listener for movies boxes
        // Task 3 - Add event listener for delete button (delete movie button
        moviesContainer.addEventListener('click', function(event) {
            if (event.target.tagName === 'BUTTON') {
                deleteMovie(event);
            }
            else {
                var target;
                if (event.target.tagName === 'LI') {
                    target = event.target;
                }
                else if (event.target.parentElement.tagName === 'LI') {
                    target = event.target.parentElement;
                }

                var movieId = parseInt(target.getAttribute('data-id'));
                var clickedMovie = _movies.filter(function(movie) {
                    return movie._id === movieId;
                })[0];
                var actors = document.createElement('div');
                actors.setAttribute('actors', 'actors');
                actors.innerHTML = '<h2>Actors:</h2>';
                var ul = loadActors(clickedMovie.getActors());
                actors.appendChild(ul);
                var reviews = document.createElement('div');
                reviews.setAttribute('reviews', 'reviews');
                reviews.innerHTML = '<h2>Reviews:</h2>';
                ul = loadReviews(clickedMovie.getReviews());
                reviews.appendChild(ul);
                detailsContainer.innerHTML = actors.outerHTML;
                detailsContainer.innerHTML += reviews.outerHTML;
                detailsContainer.setAttribute('movie-id', movieId);
            }
        });


        function deleteMovie(event) {
            var ulMovies = document.querySelector('div#movies ul'),
                liElementToRemove;
            //https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
            var movieId = parseInt(event.target.dataset.id);
            //ev.target.getAttribute('data-id')

            //deleting movie form genres
            genres.forEach(function(genre) {
                genre.deleteMovieById(movieId);
            });

            // deleting movie form the _movies;
            _movies = _movies.filter(function(movie) {
                return movie._id !== movieId;
            });

            liElementToRemove = ulMovies.querySelector('li[data-id="' + movieId + '"]');
            ulMovies.removeChild(liElementToRemove);
            detailsContainer.innerHTML = '';
        }

        // Task 3 - Add event listener for delete button (delete review button)
        detailsContainer.addEventListener('click', function(event) {
            if (event.target.tagName === 'BUTTON') {
                deleteReview(event);
            }
        });

        function deleteReview(event) {
            var reviewId = parseInt(event.target.getAttribute('data-id'));
            var movieId = parseInt(detailsContainer.getAttribute('movie-id'));
            var genreId = parseInt(moviesContainer.getAttribute('data-genre-id'));
            genres.forEach(function(genre) {
                if (genre._id === genreId) {
                    //deleting from the _movies
                    var movieWithReview = _movies.filter(function(movie) {
                        return movie._id === movieId;
                    })[0];
                    movieWithReview.deteleReviewById(reviewId);
                    //deleting form genres
                    movieWithReview = genre.getMovies()
                                           .filter(function(movie) {
                                               return movie._id === movieId;
                                           })[0];
                    movieWithReview.deteleReviewById(reviewId);
                }
            });

            var parent = event.target.parentNode.parentNode;
            var liElementToRemove = parent.querySelector('li[data-id="' + reviewId + '"]');
            parent.removeChild(liElementToRemove);
        }
    }

    function loadGenres(genres) {
        var genresUl = document.createElement('ul');
        genresUl.setAttribute('class', 'nav navbar-nav');
        genres.forEach(function(genre) {
            var liGenre = document.createElement('li');
            liGenre.innerHTML = genre.name;
            liGenre.setAttribute('data-id', genre._id);
            genresUl.appendChild(liGenre);
        });

        return genresUl;
    }

    function loadMovies(movies) {
        var moviesUl = document.createElement('ul');
        movies.forEach(function(movie) {
            _movies.push(movie);
            var liMovie = document.createElement('li');
            liMovie.setAttribute('data-id', movie._id);

            liMovie.innerHTML = '<h3>' + movie.title + '</h3>';
            liMovie.innerHTML += '<div>Country: ' + movie.country + '</div>';
            liMovie.innerHTML += '<div>Time: ' + movie.length + '</div>';
            liMovie.innerHTML += '<div>Rating: ' + movie.rating + '</div>';
            liMovie.innerHTML += '<div>Actors: ' + movie._actors.length + '</div>';
            liMovie.innerHTML += '<div>Reviews: ' + movie._reviews.length + '</div>';
            var deleteMovieButton = document.createElement('button');
            deleteMovieButton.innerHTML = 'Delete movie';
            deleteMovieButton.setAttribute('data-id', movie._id);
            liMovie.appendChild(deleteMovieButton);

            moviesUl.appendChild(liMovie);

        });

        return moviesUl;
    }

    function loadActors(actors) {
        var actorsUL = document.createElement('ul');
        actors.forEach(function(actor) {
            var liActor = document.createElement('li');
            liActor.setAttribute('data-id', actor._id);
            liActor.innerHTML = '<h4>' + actor.name + '</h4>';
            liActor.innerHTML += '<div><strong>Bio: </strong>' + actor.bio + '</div>';
            liActor.innerHTML += '<div><strong>Born: </strong>' + actor.born + '</div>';

            actorsUL.appendChild(liActor);

        });

        return actorsUL;
    }

    function loadReviews(reviews) {
        var reviewsUL = document.createElement('ul');
        if (reviews.length > 0) {
            reviewsUL = document.createElement('ul');
            reviews.forEach(function(review) {
                var liReview = document.createElement('li');
                liReview.setAttribute('data-id', review._id);
                liReview.innerHTML = '<h4>' + review.author + '</h4>';
                liReview.innerHTML += '<div><strong>Content: </strong>' + review.content + '</div>';
                liReview.innerHTML += '<div><strong>Date: </strong>' + review.date + '</div>';
                var deleteReviewButton = document.createElement('button');
                deleteReviewButton.innerHTML = 'Delete review';
                deleteReviewButton.setAttribute('data-id', review._id);
                liReview.appendChild(deleteReviewButton);

                reviewsUL.appendChild(liReview);

            });
        }
        else {
            reviewsUL.innerHTML = 'No reviews available';
        }

        return reviewsUL;
    }

    //function loadDetails(details) {
    //    var ulDetails = document.createElement('ul');
    //    details.forEach(function(detail) {
    //        var liDetail = document.createElement('li');
    //        liDetail.setAttribute('data-id', detail._id);
    //        liDetail.innerHTML = '';
    //        for (var prop in detail) {
    //            if (detail.hasOwnProperty(prop) && prop !== '_id') {
    //                liDetail.innerHTML += '<div><strong>' + prop + ': </strong> ' + detail[prop] + '</div>';
    //            }
    //        }
    //        ulDetails.appendChild(liDetail);
    //    });
    //
    //    return ulDetails;
    //}

    scope.loadHtml = loadHtml;
}(imdb));