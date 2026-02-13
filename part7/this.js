let student={
    name:'vishnu',
    age:22,
    DOB:"19-04-2004",
    dept:'raptors prime',
    avgMarks:90,
    getinfo(){
       console.log(`${this.name} is ${this.age} years old`);
    }
   
};
student.getinfo()
try{
    let x=y+1;

} catch(err)
{
    console.log(err.name);
    console.log(err.message);
}

// throwing my own error
function division(a,b)
{
    if(b==0)
    {
        throw new Error('Division by zero is not allowed');

    }
    return a/b;
}
try{
    division(14,0);

}catch(e){
 console.log(e.name);
 console.log(e.message);
}

try{
    console.log(a);
}
catch(err)
{   console.log(err.name);
    console.log('we got an error here , a is not defined ..')
}
const square=(n)=>{return n*n;}
sqr=square(5);
console.log(`sqr = ${sqr}`);
let id= setInterval(()=>{
    console.log('hello world')
},2000);
setTimeout(()=>{
    clearInterval(id);
},10000);