var models=models||{};

(function(scope) {
    function CustomerReview(customer, content, rating, createdOn) {
        //customerReview = models.getCustomerReview(customer, content, rating, createdOn);
        this.customer=customer;
        this.content=content;
        this.rating=rating;
        this.createdOn=createdOn;
    }

    scope.getCustomerReview= function getCustomerReview(customer, content, rating, createdOn){
        return new CustomerReview(customer, content, rating, createdOn);
    };
    //model se podava gore vav funkciata pod imeto scope
}(models));