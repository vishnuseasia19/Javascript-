// check all elements in array are multiples of 10 or not 
let nums=[2,3,1,4,5,6,7,56,4];
let nums2=[10.20,30,40,50];

let ifMultiple=nums2.every((el)=>{
 return el % 10===0;
})
console.log(ifMultiple);

// to find the min number in an array.
let min=nums.reduce((min,el)=>{
    if(el>min)
    {
        return min;
    }
    else {
        return el;
    }
});
console.log('min in array =',min);


