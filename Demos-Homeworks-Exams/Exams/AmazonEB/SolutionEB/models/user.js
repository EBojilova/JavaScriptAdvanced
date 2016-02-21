var models = models || {};

(function(scope) {
    function User(username, fullName, balance) {
        //userPesho = models.getUser('PeshoKirkata', 'Peter Petrov Manolov', 1230);
        this.username = username;
        this.fullName = fullName;
        this._balance = balance;
        // pravim coupling, no taka e napravena zadachata za ulesnenie
        // moje da ia podavame otvan ShoppingCart
        this._shoppingCart = scope.getShoppingCart();
    }

    //username,
    // fullName,
    // balance HIDDEN
    // shoppingCart HIDDEN
    // functions:
    //o	addItemToCart i.e. userPesho.addItemToCart(item3);

    User.prototype.addItemToCart = function addItemToCart(item) {
        this._shoppingCart.addItem(item);
    };
    
    scope.getUser = function getUser(username, fullName, balance) {
        return new User(username, fullName, balance);
    };
    //model se podava gore vav funkciata pod imeto scope
}(models));