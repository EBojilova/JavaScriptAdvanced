var models=models||{};

(function(scope) {
    function Category(name) {
        //liCategory.innerHTML = category.name;
        //category._categories.length > 0
        this.name = name;
        this._categories = [];
        this._items=[];
    }
    //Category – name,
    // collection of categories (nested categories) HIDDEN
    // collection of items. HIDDEN
    // functions:
    //o	addCategory, i.e. categoryComputers.addCategory(categoryComputersLaptops);
    //o	getCategories, i.e. categoryBooks = models.getCategory('Books');
    //o	addItem, i.e. categoryElectronics.addItem(item6);
    //o	getItems

    Category.prototype.addCategory = function addCategory(category) {
        this._categories.push(category);
    };
    Category.prototype.getCategories = function getCategories() {
        return this._categories;
    };

    Category.prototype.addItem = function addItem(item) {
        this._items.push(item);
    };
    Category.prototype.getItems = function getItems() {
        return this._items;
    };
    
    scope.getCategory= function getCategory(name){
        return new Category(name);
    };
    //model se podava gore vav funkciata pod imeto scope
}(models));