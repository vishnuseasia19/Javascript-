function greet()
{
    console.log('hello');
}
greet();
function average(n1,n2,n3)
{
    let avg=(n1,n2,n3)/3;
    avg=Math.round(avg);
    console.log('average =',avg);
}
average(3,5,2);
function sumOfN(n)
{  
    let sum =0;
    for(let i=1;i<=n;i++)
    {
         sum+=i;
    }
    return sum;
}
console.log('sum = ',sumOfN(5))

let arrayOfString=['my','name','is','vishnu'];
function concateString(arrayOfString){
    let concateString='';
       for(let i=0;i<arrayOfString.length;i++)
       {
         concateString+=arrayOfString[i];
       }
       return concateString;
}
console.log('string = ',concateString(arrayOfString).split(","));
// function expression
const sum = function(a,b)
{
    return a+b;
}
console.log(sum(5,6));

//higher order Functions
// higher order functions take multiple functions as a arguments
function mutipleGreet(func,n)
{
    for(let i=1;i<=n;i++)
    {
        func();
    }
} 
let greets=function()
{
    console.log('hello');
}
mutipleGreet(greets,5);

// higher order function
 // multiple functins in functions 
 //methods in functions
 
