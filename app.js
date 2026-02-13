console.log('hello team')
let a=10;
let b=8;
console.log("sum =",a+b);

// const { stdin, stdout } = require('process');
// const readline= require('readline');
// const r1=readline.createInterface({
//     input : process.stdin,
//     output:process.stdout
// });
// for(let i=0;i<2;i++){
// r1.question("enter the month :",(input)=>
// {
//     let month=String(input);

//     if(month==='january'){
//     console.log('winter is here');
// }
// else if(month==='april'){
//     console.log('summmer is here');
// }
// })

// }

// let str='Vishnu';
// if(str[0]==='V'&& str.length>3)
// {
//     console.log('this is a good string')
// }

//Taketheuser'sname&ageasinputusingprompts.Thenreturnbackthefollowingstatementtotheuserasanalert(bysubstitutingtheirname&age):nameisageyearsold.
// let name =prompt('enter the name :')
// let age =prompt('enter the age :')
// alert(`${name} is ${age} years old`);

// let num1=parseInt(prompt('enter the  first number : '));
// let num2 =parseInt(prompt('enter the second number :'));

// if(num1%10===num2%10)
// {
//     alert('they have same last digits ..')
// }
// else{
//     alert('they do not have same last digit.. ')
// }
let str =' vishnu  ';
console.log(str.trim());
// let password = prompt('enter the password ');
// alert(password.trim());
let info=['vishnu',22,4076];
let arr=[];
info.push('anshu');
info.unshift('sehjot')
console.log(info)
info.pop();
console.log(info)
let game=[['X',null,'O'],[null,"X",null],['O',null,'X']];
console.log(game)

let n=parseInt(prompt('enter the Number: '));

for(let i=1;i<=10;i++)
{
    console.log(`${n}*${i} = ${n*i}`);
  
}