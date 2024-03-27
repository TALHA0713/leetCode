const removeSpaces = (str) => {
    let left = 0;
    let right = str.length - 1;

    while (left < str.length && str[left] === ' ') {
        left++;
    }
    while (right >= 0 && str[right] === ' ') {
        right--;
    }

    let newStr = '';
    for (let i = left; i <= right; i++) {
        if (str[i] !== ' ') {
            newStr += str[i];
        } else if (str[i] === ' ' && str[i - 1] !== ' ' && i > left && i < right) {
            newStr += str[i];
        }
    }

    return newStr;
}

let string = "  hello      world  ";
let result = removeSpaces(string);
console.log(result); // Output: helloworld
