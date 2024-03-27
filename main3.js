const check = (can, ext) => {
    const result = [];
    const maxCandies = Math.max(...can);   
    let minCandies = Math.min(...can);   
    let minCandies1 =minCandies+ 5;
    console.log(minCandies);

     

    for (let index = 0; index < can.length; index++) {
        can[index] += ext;

        if(can[index]>=maxCandies){
            if(can[index]>minCandies){
                result.push(can[index] !== minCandies1);
            }
            
        }
        else if(can[index]<maxCandies){
            result.push(can[index] !== maxCandies);
        }

        
        
    }

   
    return result;
};

// Example usage:
const originalArray = [6,3 ,1,10, 20,1];
const extension = 5;
const modifiedArray = check(originalArray, extension);
console.log(modifiedArray);

