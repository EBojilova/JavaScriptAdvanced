var amazon = amazon || {};

(function(amazon) {
    var fragment = new DocumentFragment();
    var _categories = [];

    function loadHtml(categories) {
        var ul = loadCategories(categories);
        document.getElementById('categories')
                .appendChild(ul);
        ul.addEventListener('click', function(event) {
            var category = _categories.filter(function(category) {
                return category.name == event.target.getAttribute('data-name');
            })[0];
            var itemsDiv = document.getElementById('items');
            if (itemsDiv.innerHTML === '') {
                loadItems(category.getItems());
            }
            else {
                itemsDiv.innerHTML = '';
            }
        });
    }

    function loadUsers(users) {
        var usersDiv = document.getElementById('users');
        var ul = document.createElement('ul');
        users.forEach(function(user) {
            var userLi = document.createElement('li');
            userLi.innerHTML = '<div>' + user.username + '</div>';
            userLi.innerHTML += '<div>' + user.fullName + '</div>';
            userLi.innerHTML += '<div>' + user._balance + '</div>';
            ul.appendChild(userLi);
        });

        usersDiv.appendChild(ul);
    }

    function loadCategories(categories) {
        var ulCategories = document.createElement('ul');
        categories.forEach(function(category) {
            _categories.push(category);
            var liCategory = document.createElement('li');
            liCategory.innerHTML = category.name;
            liCategory.setAttribute('data-name', category.name);
            ulCategories.appendChild(liCategory);
            if (category._categories.length > 0) {
                var nestedCategories = loadCategories(category._categories);
                liCategory.appendChild(nestedCategories);
            }
        });

        return ulCategories;
    }

    function loadReviews(reviews) {
        var ulReviews = document.createElement('ul');
        reviews.forEach(function(review) {
            var liReview = document.createElement('li');
            liReview.innerHTML = '<div>' + review.customer + '</div>';
            liReview.innerHTML += '<div>' + review.content + '</div>';
            liReview.innerHTML += '<div>' + review.rating + '</div>';
            liReview.innerHTML += '<div>' + review.createdOn + '</div>';
            ulReviews.appendChild(liReview);
        });

        return ulReviews;
    }

    function loadItem(item) {
        var liItem = document.createElement('li');
        liItem.innerHTML = '<div>' + item.title + '</div>';
        liItem.innerHTML += '<div>' + item.description + '</div>';
        liItem.innerHTML += '<div>' + item.price + '</div>';
        var customerReviewsDiv = document.createElement('div');
        customerReviewsDiv.setAttribute('reviews', 'reviews');
        customerReviewsDiv.style.display = 'none';
        customerReviewsDiv.innerHTML = '<p>Customer reviews:</p>';
        var ul = loadReviews(item.getCustomerReviews());
        customerReviewsDiv.appendChild(ul);
        liItem.appendChild(customerReviewsDiv);

        return liItem
    }

    function loadItems(items) {
        var itemsDiv = document.getElementById('items');
        if (!items.length) {
            itemsDiv.innerHTML = 'The category is empty!';
            return;
        }

        var ulItems = document.createElement('ul');
        items.forEach(function(item) {
            var liItem = loadItem(item);
            ulItems.appendChild(liItem);
        });

        itemsDiv.appendChild(ulItems);

        ulItems.addEventListener('click', function(event) {
            // TODO: to fix it, because is working only for the first child
            var reviewsDiv = event.currentTarget.querySelector("[reviews='reviews']");
            if (reviewsDiv.style.display == 'none') {
                reviewsDiv.style.display = 'inline';
            }
            else {
                reviewsDiv.style.display = 'none';
            }
        });
    }

    amazon.loadHtml = loadHtml;
    amazon.loadUsers = loadUsers;
}(amazon));