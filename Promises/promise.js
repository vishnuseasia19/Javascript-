// function savetoDB(data,success, failure)
// {
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4)
//     {   success();
   

//     } else 
//     {   failure();
  
//     }
// }
// savetoDB("vishnu",
//     ()=>
// {
//          console.log("your data was saved",data);
// },
// ()=>{
//       console.log("weak connection, data not saved ")
// }
// );

// smart home 
// promise chaining
function savetoDB(data)
{ return new Promise((fullfill,reject)=>{
let internetSpeed=Math.floor(Math.random()*10+1);
    if(internetSpeed>4)
    {
      fullfill("success......");
    }
    else{
        reject("weak internetConnection");
    }
})
    
} 
savetoDB("vishnu")
.then((result)=>{console.log("data1 is saved");
     console.log(result);
    return savetoDB("ansh");
})
.then((result)=>{
    console.log("data2 saved");
    console.log(result);
    return savetoDB("mussi");

})
.then((result)=>{
    console.log("data3 saved");
    console.log(result);

})
.catch(()=>{
    console.log("promise was rejected.");
}) ;
