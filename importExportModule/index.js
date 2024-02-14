

//  ALL PARAMETRS NAME SHOULD BE SAME IN THIS METHOD called NAMED IMPORT
let {mod,add,sub,mul,name,div1,safik} = require("./index2")
console.log("hello Myself", safik.name );
console.log("My rank is", safik.rank );
console.log(`i am a ${safik.developer} developer`);
console.log(add(5,3));
console.log(sub(5,3));
console.log(mul(5,3));  
console.log(div1(5,3));  
console.log(mod(5,3));  
console.log(name)


//           WAY-2


// let abc = require("./index2")
// console.log(abc.add(5,3));
// console.log(abc.safik);
// console.log(abc.safik.name)
// console.log(abc.div1(15,3));
// console.log(abc.mod(17,4));