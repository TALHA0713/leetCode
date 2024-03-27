


const reversed = (str)=>{
    let vovel = ['a','e','i','o','u','A','E','O','I','U'];
    let vovelArr = [];

    for (const iterator of str) {
        // console.log(iterator);
        if(vovel.includes(iterator)){
            vovelArr.push(iterator);
        }
    }
    // console.log(vovelArr);

    let reversedStr = '';

    for (const iterator of str) {
        if(vovel.includes(iterator)){
            reversedStr += vovelArr.pop();
        }
        else{
            reversedStr += iterator;
        }
    }
    return reversedStr;


}
let str = "hello talha how are you";

let array = str.split('');
console.log(array);
// console.log(str);
const  reversedStr =reversed(str);
console.log(reversedStr);