var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        var wordsToReplace = /Donald Trump|Donald J Trump|Donald J. Trump|President Trump|Donald John Trump/ig;
        var replacement = 'Individual-1';

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(wordsToReplace, replacement);

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
