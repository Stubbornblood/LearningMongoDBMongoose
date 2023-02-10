const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/personDB')


const fruitSchema = new mongoose.Schema({
    _id : Number,
    name : {
        type : String,
        required : true
    },
    rating : Number,
    title :{
        type : String
    }

})
const personSchema = new mongoose.Schema({
    _id : Number,
    name : {
        type : String,
        required : true
    },
    age : Number,
    favoritfruit: fruitSchema
})

const fruit = mongoose.model("fruit",fruitSchema)
const person = mongoose.model("person",personSchema)

const firstFruit = new fruit({
    _id : 1,
    name : "Apple",
    rating : 7,
    title : "Awesome fruit good for health to eat"

})

const secondFruit = new fruit({
    _id : 2,
    name : "kiwi",
    rating : 8,
    title : "one of the recommended fruit item"
})

// fruit.insertMany([firstFruit,secondFruit],(err)=>{
//     if(err) console.log("We got an err")
//     else console.log("data inserted succefull!")
// })

const firstPerson = new person({
    _id : 1,
    name : "John",
    age : 17
})
const secondPerson = new person({
    _id : 2,
    name : "David",
    age : 15
})

// person.find((err,person)=>{
//     if(err) console.log("We got an error")
//     else{
//         console.log(person)
//     }
// })

// person.insertMany([firstPerson,secondPerson],(err)=>{
//     if(err) console.log("Error occur!")
//     else console.log("No error occurs")
// })

const pineapple = new fruit({
    _id : 3,
    name : "pineapple",
    rating : 7,
    title : "Healthy for summer!"
})

const thirdPerson = new person({
_id : 3,
name : "Amy",
age : 12,
favoritfruit : pineapple
})

const banana = new fruit({
    _id : 4,
    name : "Banana",
    rating : 10,
    title : "Light-weight rich in fiber!"
})

// person.updateOne({_id: 2}, {favoritfruit: firstFruit}, (err) => {
//     if (err) {
//         console.log("Error updating person with favorite fruit");
//     } else {
//         console.log("Successfully updated person with favorite fruit");
//     }
// });

const fourthPerson = new person({
    _id : 4,
    name : "Ani",
    age : 20
})

person.updateOne({_id : 4},{favoritfruit : firstFruit},(err)=>{
    if(err){
        console.log("Error occur")
    }else{
        console.log("No error occur")
    }
})