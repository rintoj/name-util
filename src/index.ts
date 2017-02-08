
export function toDashedName(key: string): string {
    return (key.match(/[A-Z]/g) || [])
        .reduce((accumulator, letter) =>
            accumulator.replace(new RegExp(letter, 'g'), `-${letter.toLowerCase()}`), key
        )
        .replace(/(-|_|\s)+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '')
        .trim();
};

export function toCamelCase(key: string): string {
    let name = (key.match(/(-|_|\s+)[a-zA-Z]/g) || [])
        .reduce((accumulator, letter) =>
            accumulator.replace(new RegExp(letter, 'g'), letter.replace(/-|_|\s+/g, '').toUpperCase()), key
        )
        .replace(/(-|_|\s)+/g, '-')
        .replace(/^(-|_)+|(-|_)+$/g, '')
        .trim()
    return `${name.substr(0, 1).toLowerCase()}${name.substr(1)}`;
};

export function toClassName(key: string): string {
    return capitalize(toCamelCase(key)
        .replace(/[_-\s]+/g, ''));
}

export function capitalize(key: string): string {
    if (key === undefined) return key;
    key = key.trim();
    return key.substr(0, 1).toUpperCase() + key.substr(1);
}
