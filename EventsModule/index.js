const EventEmitter =require('events');      // EventEmitter is a class   because events module will return a class
const event = new EventEmitter();
//Create an event handler: means we are creating a EventEmitter class's object

// ========================================EXAMPLE-1============================================
let myEventHandler = () => {
    console.log('I hear a scream!');
  }
  //Assign the event handler to an event:
  event.on('scream', myEventHandler);
  
  //Fire the 'scream' event:
  event.emit('scream');


// =========================================EXAMPLE-1=============================================
  event.on('sayMyName',()=>{
    console.log('my self Saffix');
  })
  event.on('sayMyName',()=>{
    console.log('my self rahul');
  })
  event.on('sayMyName',()=>{
    console.log('my self gudu');
  })
  event.emit('sayMyName')

// ==============================================EXAMPLE-1=================================================

//   pass parameter

event.on("checkPage",(sc,msg)=>{
    console.log(`state code is ${sc}, and the page is ${msg}`);
})

event.emit("checkPage",200,"ok")