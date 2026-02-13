//strings
// trim method used to remove the spaces form the both ends
// strings are immutable in js  
// when ever we try to make any changes in string , a new string is created 

let str =' vishnuyadav';
console.log(str.trim());
// toUpperCase
//toLowerCase 
//indexOf
// slice - it gives part of string 
//replace

// function index(str)
// {
//     for(let i=0;i<str.length;i++)
//     {
//         console.log(str.indexOf(i));
//     }
// }
str1=str.toUpperCase().trim();
console.log(str1)
console.log(str.indexOf('v'));
console.log(str.slice(3))
console.log(str.replace('yadav','vishnu'))
// practice question 
console.log(str.slice(4,9));




