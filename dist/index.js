"use strict";
function toDashedName(key) {
    return (key.match(/[A-Z]/g) || [])
        .reduce(function (accumulator, letter) {
        return accumulator.replace(new RegExp(letter, 'g'), "-" + letter.toLowerCase());
    }, key)
        .replace(/(-|_|\s)+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '')
        .trim();
}
exports.toDashedName = toDashedName;
function toUnderscoredName(key) {
    return (key.match(/[A-Z]/g) || [])
        .reduce(function (accumulator, letter) {
        return accumulator.replace(new RegExp(letter, 'g'), "-" + letter.toLowerCase());
    }, key)
        .replace(/(-|_|\s)+/g, '_')
        .replace(/_+/g, '_')
        .replace(/^_+|_+$/g, '')
        .trim();
}
exports.toUnderscoredName = toUnderscoredName;
function toCamelCase(key) {
    var name = (key.match(/(-|_|\s+)[a-zA-Z]/g) || [])
        .reduce(function (accumulator, letter) {
        return accumulator.replace(new RegExp(letter, 'g'), letter.replace(/-|_|\s+/g, '').toUpperCase());
    }, key)
        .replace(/(-|_|\s)+/g, '-')
        .replace(/^(-|_)+|(-|_)+$/g, '')
        .trim();
    return "" + name.substr(0, 1).toLowerCase() + name.substr(1);
}
exports.toCamelCase = toCamelCase;
function toClassName(key) {
    return capitalize(toCamelCase(key).replace(/[_-\s]+/g, ''));
}
exports.toClassName = toClassName;
function capitalize(key) {
    if (key === undefined)
        return key;
    key = key.trim();
    return key.substring(0, 1).toUpperCase() + key.substr(1);
}
exports.capitalize = capitalize;
function capitalizeWords(key) {
    if (key === undefined)
        return key;
    key = key.trim();
    return toDashedName(key).split('-').map(capitalize).join(' ');
}
exports.capitalizeWords = capitalizeWords;
function nextName(names, prefix) {
    var counter = names.reduce(function (a, i) {
        var regExp = new RegExp(prefix + '(\\d+)');
        var output = regExp.exec(i);
        var value = output ? output[1] : null;
        var counter = value ? parseInt(value) : 0;
        return !isNaN(counter) ? Math.max(counter + 1, a) : a;
    }, 1);
    return "" + prefix + counter;
}
exports.nextName = nextName;
//# sourceMappingURL=index.js.map