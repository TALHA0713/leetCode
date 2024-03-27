const reversed = (value) => {
    let trimmedStr = value.replace(/\s+/g, ' ').trim();
    console.log(trimmedStr);

    if (!trimmedStr.includes(' ')) {
        return trimmedStr;
    }

    let reversed = '';
    let word = '';

    for (const iterator of trimmedStr) {
        if (iterator === ' ') {
            reversed = word + iterator + reversed;
            word = '';
        } else {
            word += iterator;
        }
    }

        reversed = word + " " + reversed.trim();
        return reversed;
    

}

let value = ' hello   world my name is talha'
const ans = reversed(value);
console.log(ans);
