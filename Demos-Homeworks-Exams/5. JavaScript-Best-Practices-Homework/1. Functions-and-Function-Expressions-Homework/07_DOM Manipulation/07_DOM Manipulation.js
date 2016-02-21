var domModule = (function() {
    
    var getElement = function(selector) {
        return document.querySelector(selector);
    }
    
    function validateParentAndChild(parent, child) {
        if (!(parent instanceof Element)) {
            parent = getElement(parent);
        }

        if (!parent) {
            throw new ReferenceError("Parent element is invalid or could not be found.");
        }

        if (!(child instanceof Element)) {
            child = getElement(child);
        }

        if (!child) {
            throw new ReferenceError("Child element is invalid or could not be found.");
        }
        return {
            parent: parent,
            child : child
        }
    }

    function appendChild(parent, child) {
        var __ret = validateParentAndChild(parent, child);
        parent = __ret.parent;
        child = __ret.child;

        parent.appendChild(child);
    }
    
    function removeChild(parent, child) {
        var __ret = validateParentAndChild(parent, child);
        parent = __ret.parent;
        child = __ret.child;
        
        parent.removeChild(child);
    }
    
    function retrieveElements(selector) {
        return document.querySelectorAll(selector);
    }
    
    function addHandler(elements, eventType, eventHandler) {
        if (!(elements instanceof Element) && !Array.isArray(elements)) {
            elements = retrieveElements(elements);
        }
        
        if (!elements) {
            throw new ReferenceError("The element(s) requested could not be found.");
        }
        
        for (var i in elements) {
            if (elements[i] instanceof HTMLElement) {
                if (document.addEventListener) {
                    elements[i].addEventListener(eventType, eventHandler, false);
                } else if (document.attachEvent) {
                    elements[i].attachEvent("on" + eventType, eventHandler);
                } else {
                    elements[i]['on' + eventType] = eventHandler;
                }
            }
        }
    }
    
    return {
        appendChild     : appendChild,
        removeChild     : removeChild,
        addHandler      : addHandler,
        retrieveElements: retrieveElements
    }
    
})();

var liElement = document.createElement("li");
liElement.className='bird';
liElement.innerHTML='Nightingale';

domModule.appendChild(".birds-list", liElement);

domModule.removeChild("ul.birds-list", "li:first-child");

domModule.addHandler("li.bird", "click", function() {
    alert("I'm a bird!")
});

var elements = domModule.retrieveElements(".bird");

console.log(elements);