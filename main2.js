const gcd = (str1, str2) => {
    function gcd2(a, b) {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    return str1 + str2 === str2 + str1 ? 
        str1.substring(0, gcd2(str1.length, str2.length)) : "";
};

let str1 = "ABABABABAB";
let str2 = "ABAB";

let div = gcd(str1, str2);
console.log(div); // Output: "ABAB"
