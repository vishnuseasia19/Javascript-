let info=['vishnu',22,4076];
let emptyArr=[];
let emptyArr1=[];
console.log(emptyArr.length);
console.log(typeof(emptyArr))
console.log(emptyArr===emptyArr1);//why- object can't compare as value , references are comapered
console.log(emptyArr==emptyArr1);
console.log(info[0].length)
// arrays are mutable 
info.push('anshu');
info.unshift('sehjot')
console.log(info)
info.pop();
console.log(info)
 //push - to add at end 
 // pop - remove at last 
 //shift - remove at last 
 //unshift - add  to start
 //indexOf - to search the index of the element 
 // include - to search the value in the array 
// reverse - reverse the elements
//concate - combine the two arrays
//slice - copies a portion of an array, bring the copy of the array with specific range
// splice - used to remove , replace , add in place - no change in original array'
// sort - sort the elements
let num=[1,2,5,4,6,2,5,8];
//let N=num.sort();
console.log(num)
let compyNum=num.splice(0).sort();

console.log(compyNum)





