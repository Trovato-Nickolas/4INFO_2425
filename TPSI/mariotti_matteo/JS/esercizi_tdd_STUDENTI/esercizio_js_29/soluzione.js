export const invert_case = (str) => {

return str.split('').map(char => {
    if (char === char.toUpperCase()) {
        return char.toLowerCase();
    } else {
        return char.toUpperCase();
    }
}).join('');
}