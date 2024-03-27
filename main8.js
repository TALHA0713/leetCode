const product = (nums)=>{
    const n = nums.length;
    const left = new Array(n);
    const right = new Array(n);
    const output = new Array(n);
    
    let product = 1;
    for (let i = 0; i < n; i++) {
        left[i] = product;
        product *= nums[i];
    }
    product = 1;
    for (let i = n - 1; i >= 0; i--) {
        right[i] = product;
        product *= nums[i];
    }

    for (let i = 0; i < n; i++) {
        output[i] = left[i] * right[i];
    }

    return output;
    


    

}

let array = [1,2,3,4];
const ans = product(array);
console.log(ans);
