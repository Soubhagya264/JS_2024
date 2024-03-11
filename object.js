let inputArray =[
    {id:1, name:"Alice",address:"USA",city:"NYC"},
    {id:2, name:"Bob",address:"USA",city:"DC"},
    {id:3, name:"Charlie",address:"UK",city:"London"}
]

const arrayToObj=(arr)=>{
    const obj={}
    for(let key of arr){
      obj[key.id]=key;
    }
    return obj;
}
const object=arrayToObj(inputArray);
console.log(object)

const {address}=object[1]
console.log(address)
const dummyObj={"SSN":552112,"Phone":8877625908}

const newObj={...object[1] , ...dummyObj}
console.log(newObj)





