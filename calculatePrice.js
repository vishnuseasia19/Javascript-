const readline= require('readline');
const r1=readline.createInterface({
    input:process.stdin,
    output : process.stdout
});
r1.question('enter the size of the item (eg. XL,L,M,S,XS):',(input)=>
{
    const size = String(input);

    if(size==='XL'|| size==='xl')
    {
        console.log('price is Rs. 350');
    }
    else if(size==='l'|| size==='L')
    {
        console.log('price is RS. 300')
    }
    else if(size==='M'|| size==='m')
    {
        console.log('price is Rs. 450')
    }
    else {
        console.log('price is Rs. 400 ')
    }
})