export function caesarCipher(string, factor) {
    string = string.toLowerCase();
    const letters = ["a","b","c","d","e","f","g","h","i","j",
        "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const specialChars = [
        " ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", 
        ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"
        ];
    let result = "";

    for(const value of string) {
        const position = letters.indexOf(value);
        if(specialChars.includes(value)) {
            result += value;
            continue;
        }
        const refactored = checkBounds((position + factor), letters);
        result += letters[refactored];
    }
    return result.toLocaleUpperCase();
}

console.log(caesarCipher("Hello, World!", 3));

function checkBounds(value, arr) {
    if(value > arr.length - 1) {
        const remaining = value - arr.length;
        return checkBounds(remaining, arr);
    }
    return value;
}