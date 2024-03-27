let array = [1,0,1,0,0,0,0,1];
let n = 1;


let count = (array,n)=>{
    for (let index = 0; index < array.length; index++) {
        if(array[index]+array[index+1]===0 && array[index-1]===0){
            array[index]=1;
            n--
        }      
        else{
            continue
        }    
    }
    if(n===0){
        return true
    }
    else{
        return false
    }
    
}


const ans = count(array,n);
console.log(ans);