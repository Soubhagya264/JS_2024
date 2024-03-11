let employees = [
    { name: "Tony Stark", department: "IT" },
    { name: "Peter Parker", department: "Pizza Delivery" },
    { name: "Bruce Wayne", department: "IT" },
    { name: "Clark Kent", department: "Editing" }
];

const IT_Emp=employees.filter((employee)=>{
   return employee.department == "IT"
})

IT_Emp.forEach((employee)=>{
    console.log(employee.name);
})

const numbers = [1, 4, 9, 16, 25];
const squareRoots = numbers.map(num => Math.sqrt(num));
console.log(squareRoots);

const arr=[5,1,3,2,6]
const output=arr.reduce((acc,curr)=>acc+=curr)
console.log(output)

const findMax=arr.reduce((max,curr)=>{
    if(curr>max) max=curr;
    return max;
})
console.log(findMax)

const evenSq=numbers.map((ele)=>{
    if(ele %2===0){
        return ele*ele;
    }
}).filter((ele)=>ele!==undefined)
console.log(evenSq);

const nestedArray=[1,2,[3,4],5];
const flattenedArray=nestedArray.flat();
console.log(flattenedArray)

const array=["My name","is","Soubhagya Nayak"]
const newArray=array.flatMap((curVal)=>curVal.split(" "));
console.log(newArray);
