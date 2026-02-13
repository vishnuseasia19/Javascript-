const readline= require('readline');
const r1=readline.createInterface({
    input:process.stdin,
    output : process.stdout
});
r1.question("enter the marksPercentage :",(input)=>{
    const num = Number(input);
    if(isNaN(num)){
        console.log('this is invalid input ! please enter the right input .');

    }
    else if(num>90){
        console.log('A Grade');
    }
    else if(num>78 && num<89){
        console.log('B Grade');
    }
    else if(num>50 && num<78)
    {
        console.log("C Grade")
    }
    else {
        console.log("Fail... ")
    }
})