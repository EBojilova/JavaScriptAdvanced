var models=models||{};

(function(scope) {
    function ShoppingCart() {
        //liShoppingCart.innerHTML = category.name;
        //category._categories.length > 0
        this._items=[];
    }
    //ShoppingCart – Should have collection of items HIDDEN
    // functions:
    //o	addItem
    //o	getTotalPrice
    
    ShoppingCart.prototype.addItem = function addItem(item) {
        this._items.push(item);
    };
    ShoppingCart.prototype.getTotalPrice = function getTotalPrice() {
        var sum=0;
        this._items.forEach(function(item){
            sum+=item.price;
        });
        return sum;
    };

    scope.getShoppingCart= function getShoppingCart(){
        return new ShoppingCart();
    };
    //model se podava gore vav funkciata pod imeto scope
}(models));