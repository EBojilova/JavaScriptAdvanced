function createParagraph(id, text) {
    if (!(id instanceof Element)) {
        var parent = document.getElementById(id);
    }

    if (!parent) {
        throw new ReferenceError("Parent element is invalid or could not be found.");
    }

    var pElement = document.createElement('p');
    pElement.textContent = text;
    parent.appendChild(pElement);
}

createParagraph('wrapper', 'Some text');
