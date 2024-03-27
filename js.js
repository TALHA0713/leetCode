// let a = "11";
// console.log(typeof a);

// let firstName = "";
// if (firstName) {
//   console.log(firstName);
// } else {
//   console.log("error");
// }

// falsy means it can not run if condition because it was return false can not run 

// for converting number to string through + operator and 
// reverse is done by String() function

// let count = 0;
// while(false){
//     count++
// }

// array is  object all object is refrence type
let array = ["apple", "bnana", "mangose","talha","anie"];

// console.log(array);
// console.log(typeof array);
// it gives object

//  we can change the  original array through index 
// array[1]= "talha";
// console.log(array);


// console.log(Array.isArray(array));
// it can tell us that it was array or object


// make to copy of array but it was differnet 
// let arr2 = [].concat(array);
// let arr2 = array.slice(0); // fast method
// console.log(arr2);
// let arr2 = [...array]
// console.log(array===arr2)
// console.log(array==arr2)


// we can use const to make array then we are safe we can use method of array to add or delete data but we can not assig value to array is not direct means  array=["talha"] if we assign this to const array gives error so prefer to use const 

// for of loop gives the value but for in gives the index 

// array destructuring first value going to var1 rest all going to var2
// let [myvar1,...myvar2]= array;

// object ko iterate kr skte  h hm through 
// for in and objet.keys
// Object.keys(object_name) it gives array



// = : very differnce

// [key]:Value;
// obj[key]=Value;

// simple me : dalna 
// agr object ka name likha h piche to = dalna h remeber 


// const newObject = {...["item1","item2"]};
// const newObject2 = {..."abe"};
// console.log(newObject);
// console.log(newObject2);
// console.log(newObject2[1]);
// inko bhi value assign kre ga or index ko key bna dega
// same dono me


// hoisting
// call before make    
// function inside a function
//lexical scope means aik me nai mila to above dekhe ga kisi or me pra h agr waha nai or uper dekhe ga agr nai mile ga to error de de ga

// let and const are block scope
// var is function scope


// parameter destucturing
// let person = {
//     name : "talha",
//     age : "21",
//     love : "Allah se    "
// }

// function obj({name,age,love}){
//     console.log(name,age,love);
// }

// obj(person)

// function returning a function


const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")

// setTimeout(()=>{
//     heaading1.textContent = "Talha";
//     heaading1.style.color = "violet";
//     setTimeout(()=>{
//         heaading2.textContent = "Talha";
//         heaading2.style.color = "green";
//         setTimeout(()=>{
//             heaading3.textContent = "Talha";
//             heaading3.style.color = "magenta";
//             setTimeout(()=>{
//                 heaading4.textContent = "Talha";
//                 heaading4.style.color = "yellow";
//             },1000)
//         },1000)
//     },1000)
// },1000)


// function change(time,element,color,text,callback){
//     setTimeout(()=>{
//         if(element){
//             element.textContent = text;
//             element.style.color = color;
//         if(callback){
//             callback();
//         }
//         }
//         else{
//             console.error(error);
//         }
//     },time)
// }

// change(1000,heading1,"green","talha",()=>{
//     change(2000,heading2,"red","anie",()=>{
//         change(1000,heading3,'yellow',"ali",()=>{
//             change(2000,heading4,'magenta',"ahmad",()=>{
//                 change(1000,heading5,'yellow',"talha")
//             })
//         })
//     })
// })




// let check = new  Promise((resolve,reject)=>{
//     if(array.includes("talha")&&array.includes("ali")){
//         resolve("talha and ali are here")
//     }
//     else{
//         reject("not present")
//     }
// })

// check.then((data)=>{
// console.log("both are present");
// }).catch((err)=>{
//     console.log("not present");
// })



// function practice(){
//     let arr2 = array;
//     return new Promise((resolve,reject)=>{
//         if(arr2.includes("anie")&&arr2.includes("talha")){
//             resolve({both:"both are love to eat mangose"})
//         }
//         else{
//             reject("both are not present")
//         }
//     })
// }
// practice().then((data)=>{
//     console.log(data.both);
//     }).catch((err)=>{
//         console.log(err);
//     })



function change(time,element,color,text){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve ();
            }
            else{
                console.error(error);
                reject()
            }
        },time)
    })
}

change(1000,heading1,"yellow","talha")
.then(()=>{
git     return change(2000,heading2,"red","anie")
}).then(()=>{
    return change(1000,heading3,"magenta","anie",)
}).catch((err)=>{
    console.log(err);
})