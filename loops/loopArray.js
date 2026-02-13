let colors=['orange','blue','black','pink','red'];
for(let i=0;i<colors.length;i++)
{
    console.log(i+ ' :' ,colors[i])
}
console.log('\n')
let cars = [
  ["BMW", "Audi", "Mercedes"],
  ["Honda", "Toyota", "Hyundai"],
  ["Tata", "Mahindra", "Suzuki"]
];
for(let car =0;car<cars.length;car++)
{    
    for(let brand=0;brand<cars[car].length;brand++)
    {
      console.log(cars[car][brand]);
    }
}
