let btn=document.querySelector('.btn');
console.dir(btn)
btn.addEventListener('click',function()

{
    console.log('change rander color ;')
    let h3=document.querySelector("h3");
    let randomColor=generateNumber()
    h3.innerText=randomColor;
    console.log('color Updated....');
    let div=document.querySelector(".box");
    div.style.backgroundColor=randomColor;

})
function generateNumber()
{
    let red=Math.floor(Math.random()*255)
    let green=Math.floor(Math.random()*255)
    let blue=Math.floor(Math.random()*255)
    let color=`rgb(${red}, ${green}, ${blue})`;
    return color;

}

let input=document.querySelector("input");
input.addEventListener("keydown", function()
{
    console.log("key was pressed.. ");
})