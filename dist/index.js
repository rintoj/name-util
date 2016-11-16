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
;
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
;
function toClassName(key) {
    return capitalize(toCamelCase(key));
}
exports.toClassName = toClassName;
function capitalize(key) {
    if (key === undefined)
        return key;
    key = key.trim();
    return key.substr(0, 1).toUpperCase() + key.substr(1);
}
exports.capitalize = capitalize;
//# sourceMappingURL=index.js.map