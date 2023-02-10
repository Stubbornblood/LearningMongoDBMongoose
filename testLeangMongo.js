const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/personDB')

const personSchema = new mongoose.Schema({
 
    _id : {
        type : Number
    },
     
    name : {
    
        type : String,
        required : true
     } ,

     age : {
        type : Number
     }
     
})

const person = mongoose.model("iamperson",personSchema)

const personData = new person({
    
    _id : 2,
    name : "Harru",
    age  : 27


},(err)=>{if(err){console.log("Got an error")}else{
    console.log("Data is inserted into system!")
}})

personData.save()


// person.deleteMany({
 
//     name : /Harru/
     

// },(err)=>{
//     if(err) console.log("We are getting error in deleting it")
//     else console.log("Data deleted succefully")
// })
