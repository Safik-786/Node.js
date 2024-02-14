const object ={
    b:2, 
    c:3,
    d:4
}
const newObj ={...object,d:5}
console.log(newObj);
const newObj2 ={...object,e:5}
console.log(newObj2);
const newObj3 ={a:1,...object}
console.log(newObj3);