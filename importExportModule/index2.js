safikMd= {
    name: 'saffix',
    rank : 1,
    developer : 'js',
}
const add= function(a, b){
    return a+b;
}
const sub= function(a, b){
    return a-b;
}
const mul= function(a, b){
    return a*b;
}
const division= function(a, b){
    return a/b;
}
const modulus= function(a, b){
    return a%b;
}
const name ='larabl'

// function object all can be deStructuring can be destructur
let div1 = division
let safik = safikMd

module.exports =  {safik,add,sub,mul,name,div1}
module.exports.mod = modulus