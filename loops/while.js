let i=1;
while(i<=10)
{
    console.log(i)
    i++;
}
let favMovie='martian';
let guess=prompt('enter the favourite movie');
while((guess!=favMovie)&&(guess!='quit'))
{
    prompt('please try again .wrong guess!')
}
if(guess==favMovie)
{
    alert(`${favMovie} is my favourite Movie`)
} 
else if(guess=='quit')
{
  alert(`${guess} is not my favourite movie`);
}
