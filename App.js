const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/personDB",()=>{
    console.log("Connected to database!");
});

const personSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,"please check your data entry no name is specified"]
    },
    age  : Number
});

const people = mongoose.model("pep",personSchema);

// const pop  = new people({
//     name:"john",
//     age : 51
// })

//    pop.save();
  


people.find((err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})


// people.deleteMany({name:/john/},(err)=>{
     
//     if(err){
//         console.log(err)
//     }else{
//         console.log("All records deleted")
//     }

// })







// const person6 = new people({
//        name : "done",
//        age  : 37 
// })

// person6.save()










// const person1 = new people({
//     name : "John",
//     age  : 37 
// })


// const person2 = new people({
//     name : "walker",
//     age  : 45 
// })


// const person3 = new people({
//     name : "wolf",
//     age  : 45   
// })

// const person4 = new people({
//     name : "Jom",
//     age : 54
// })

// people.insertMany([person1,person2,person3,person4],(err)=>{
 
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Success!")
//     }

// })









// people.find((err,data)=>{

//     if(err){
//         console.log(err)
//     }else{
        

//         mongoose.connection.close();

//         data.forEach(ele=>{
//             console.log(ele._id,ele.name)
            
//         })
        
//     }
    
// });


// people.updateOne({_id:"63e403c532df929a3495885f"},{name : "jack"},function(err){
//    if(err){ console.log(err) }
//    else{console.log("Succesfully updated the documnet")}
// })

// people.deleteOne({_id:"63e4043965cd9026d5129c45"},function(err){
//     if(err){console.log(err)}
//     else{console.log("Deleted Succefully");}
// })