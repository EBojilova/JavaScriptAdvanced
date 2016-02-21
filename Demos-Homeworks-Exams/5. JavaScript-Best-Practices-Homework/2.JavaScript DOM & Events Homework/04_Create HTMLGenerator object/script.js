var HTMLGen = (function() {
    function validateParent(id) {
        if (!(id instanceof Element)) {
            var parent = document.getElementById(id);
        }

        if (!parent) {
            throw new ReferenceError("Parent element is invalid or could not be found.");
        }
        return parent
    }

    var createParagraph = function createParagraph(id, text) {
        var parent = validateParent(id);
        var pElement = document.createElement('p');
        pElement.textContent = text;

        parent.appendChild(pElement);
    };

    var createDiv = function createDiv(id, className) {
        var parent = validateParent(id);
        var divElement = document.createElement('div');
        divElement.className = className;

        parent.appendChild(divElement);
    };

    var createLink = function createLink(id, text, url) {
        var parent = validateParent(id);
        var aElement = document.createElement('a');
        aElement.textContent = text;
        aElement.href = url;

        parent.appendChild(aElement);
    };

    return {
        createParagraph: createParagraph,
        createDiv: createDiv,
        createLink: createLink
    }
})();

HTMLGen.createParagraph('wrapper', 'SoftUni');
HTMLGen.createDiv('wrapper', 'section');
HTMLGen.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');