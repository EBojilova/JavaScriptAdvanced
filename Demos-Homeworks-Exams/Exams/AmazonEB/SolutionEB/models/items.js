var models = models || {};

(function(scope) {
    function Item(title, description, price) {
        //item16 = models.getItem('Prestigio Multipad', 'Some description', 802);
        // title,
        // description,
        // price and
        // collection of customerReviews. HIDDEN
        this.title = title;
        this.description = description;
        this.price = price;
        this._customerReviews = [];
    }

    // functions:
    //o	addCustomerReview, i.e. item.addCustomerReview(customerReview);
    //o	getCustomerReviews
    
    Item.prototype.addCustomerReview = function addCustomerReview(customerReview) {
        this._customerReviews.push(customerReview);
    };
    Item.prototype.getCustomerReviews = function getCustomerReviews() {
        return this._customerReviews;
    };

    function UsedItem(title, description, price, condition) {
        // title,
        // description,
        // price
        // condition
        // collection of customerReviews. HIDDEN
        Item.call(this, title, description, price);
        this.condition = condition;
    }

    UsedItem.extends(Item);

    scope.getItem = function getItem(title, description, price) {
        return new Item(title, description, price);
    };
    scope.getUsedItem = function getUsedItem(title, description, price, condition) {
        return new UsedItem(title, description, price, condition);
    }
}(models));