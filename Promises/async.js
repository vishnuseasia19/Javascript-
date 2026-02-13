async function greet() {
   // throw "404 page not found";
    return "hello";
}
greet()
.then((res)=>{
   console.log("promise was resolve ");
   console.log("result was :", res);

})
.catch((err)=>{
    console.log("promise was rejceted with err : ",err);
})

function prepare()
{
    return new Promise((resolve)=>
    {
        setTimeout(()=>
        {
            console.log("pizza is being prepared.....");
            resolve();
        },2000);
    })
}

async function orderPizza() {
    console.log("pizza ordered!");
    await prepare();
    console.log("pizza is ready!");

    
}

orderPizza();