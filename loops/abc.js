for(let i=0;i<5;i++)
{   let row='';
   for(let j=0;j<5;j++)
   {
    row+=' '+String.fromCharCode(65+j);
   }
   console.log(row);
}
console.log('\n')

for(let i=0;i<5;i++)
{   let row='';
   for(let j=0;j<5;j++)
   {
    row+=' '+String.fromCharCode(65+i);
   }
   console.log(row);
}
console.log('\n')

for(let i=0;i<5;i++)
{   let row='';
   for(let j=0;j<i;j++)
   {
    row+=' '+String.fromCharCode(65+j);
   }
   console.log(row);
}
console.log('\n')
