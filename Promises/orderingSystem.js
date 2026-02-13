function takeOrder(){
    return new Promise((resolve)=>
    {   setTimeout(()=>
    {
        console.log('order placed. ');
        resolve();
    });
      
    });
}
// payment
function Payment()
{ return new Promise((resolve)=>{
    setTimeout(()=>
    {
       console.log("payment successful. ");
       resolve();     
    },1000);
});
}
// prepare order
function prepareOrder()
{   return new Promise((resolve)=>{
     setTimeout(()=>
    {
        console.log('preparing Order....');
        resolve();
    },2000)
})
  
}
// bake order
function bakeOrder()
{
    return new Promise((resolve)=>
    {
        setTimeout(()=>
        {
            console.log("Order is going to be ready soon !");
            resolve();
        },2000)
    });
}

// deliver Oreder
function deliverOrder()
{
    return new Promise((resolve)=>
    {
        setTimeout(()=>
        {
            console.log("Order is ready to deliver .....");
            resolve();
        },2000)
    })
}
async function Order(){
    console.log("Customer place an order..");
    await takeOrder();
    await Payment();
    await prepareOrder();
    await bakeOrder();
    await deliverOrder();

    console.log("Order completed successfully")
}

Order();