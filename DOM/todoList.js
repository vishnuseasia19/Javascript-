let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener('click',function(){
    let task=document.createElement("li");
    task.innerText=inp.value;
    ul.appendChild(task);
    let deletebtn=document.querySelector("button");
    deletebtn.innerText="delete";
    deletebtn.classList.add("delete");
    task.appendChild(deletebtn);
    ul.appendChild(task);
    inp.value='';
    console.log(inp.value);
})

let delbtns=document.querySelectorAll(".deletebtn");
for(del of delbtns)
{
    del.addEventListener("click",function(){
        console.log("element deleted");
    })
}

