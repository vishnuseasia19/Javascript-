let num=5;
console.log(num); //5

let newNum=num++;//5   post increment 
console.log(newNum)
newNum=++num; //   pre increment
console.log(newNum)//7
console.log(num)//7
// sting length
let Name ='vishnu'
console.log('Length = ',Name.length)
let firstChar=Name[0];
console.log(firstChar)
let lastChar=Name.length-1
console.log(lastChar)
console.log('bugraptors'+ 123)

const readline=require("readline");
const r1=readline.createInterface({
    input: process.stdin,
    output : process.stdout
})
r1.question('enter the String :',(input)=>
{
    let str=String(input);
    if(str[0]==='A'|| str[0]==='a' && str.length>5)
    {
        console.log('this is a golden string.');
    }
    else {
        console.log('this is not a golden string. ')
    }
})