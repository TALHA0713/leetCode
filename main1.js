let w1 = "abc";
let w2 = "pqr";

// merged = "apbqcr"

const merged = (w1,w2)=>{
let mix = '';

// while(i<w1.length||j<w2.length){

//     if(i<w1.length){
//         mix = mix + w1[i];
//         i++;
//     }
//     if(j<w2.length){
//         mix = mix + w2[j];
//         j++;
//     }
    
// }

for(let i =0; i<w1.length|| i<w2.length; i++ ){
    if(i<w1.length){
                mix = mix + w1[i];
            }
            if(i<w2.length){
                mix = mix + w2[i];
                j++;
            }
            
}

       return mix;
}


let value = merged(w1,w2);
console.log(value);


