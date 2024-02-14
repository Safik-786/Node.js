import arr, {name, func} from './Es6_exp.js'
import express from 'express'
let app = express()

app.get('/',(req, res)=>{
    res.send('<h2> Hello World </h2>')
})

app.listen(8000, ()=>{
    console.log("server Started")
})

func('safik', 21)
console.log(name)
console.log(arr)