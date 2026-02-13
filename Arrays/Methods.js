// forEach
let print=function(el){
    console.log(el);

}
let arr=[87,3,9,4,4,3,3,2,2];
arr.forEach(print); 
// square of each element in array
arr.forEach(
    function squareElement(el) {
        console.log(el*el);
    }
)

console.log('--------------------------------->')
const students = [
  {
    id: 1,
    name: "Aman",
    age: 20,
    course: "CSE",
    marks: 85
  },
  {
    id: 2,
    name: "Neha",
    age: 21,
    course: "ECE",
    marks: 90
  },
  {
    id: 3,
    name: "Rohit",
    age: 19,
    course: "IT",
    marks: 78
  }
];

students.forEach(function(el){
    console.log(students.marks)
})


// Map function
let num=[2,4,5,6];
let double=num.map((el)=>{
    return 2*el;
});
console.log(double);

//filter
let even=num.filter((el)=>{
    return el%2==0;
})
console.log(even);

// reduce 
// calculating max
let numbers=[11,3,5,6,6,5,4,32,2,5,6,7,7,88,0];
let max=numbers.reduce((max,el)=>
{
    if(el>max)
    {
        return el;
    }
    else {
        return max;
    }
});
console.log(max);