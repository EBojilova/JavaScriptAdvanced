function getPrint(type) {
    function printInDom(text) {
        document.body.innerHTML += '<div>' + text + '</div>';
    }

    function printInConsole(text) {
        console.log(text);
    }

    if (type === 'dom') {
        return printInDom;
    }
    else if (type === 'server') {
        return printInConsole;
    }
}

var printType = (this.document) ?
                'dom' :
                'server';
var print = getPrint(printType);
print('Message');

function compare(str1, str2, caseSensitive) {
	if (caseSensitive) {
		return compareCaseSensitive(str1, str2);
	}
	else {
		return compareCaseInsesitive(str1, str2);
    }

    function compareCaseSensitive(str1, str2) {
        // here the casing (upper / lower) of str1 and str2 matters
    }

    function compareCaseInsesitive(str1, str2) {
        // here the casing of str1 and str2 does not matter
    }
}
