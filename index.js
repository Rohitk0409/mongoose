const mongoose = require('mongoose');

main().then((res)=>{
    console.log("successfully working the mongoose....");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

// Now define schema for collection documents

const userSchema=new mongoose.Schema({name:String,email:String,age:Number});


// Model is a class forcreating collection with model same name
const User=mongoose.model("User",userSchema);


// insert data in collection in a obejct form after making object of model class
//  const user1=new User({name:"Rohir Kumar Patel",email:"rohitkumar@gmail.com"});
//  const user2=new User({name:"shubham Yadav",email:"shubham@gmial.com",age:23});

//  user1.save()
//  .then((res)=>{console.log(res)})
//  .catch((err)=>{console.log(err)});

//  user2.save()
//  .then((res)=>{console.log(res)})
//  .catch((err)=>{console.log(err)});


//----> Now insert many data in the collection in documents form
// 
// User.insertMany([
//     {name:"Shivam Yadav",email:"shivam@gmail.com",age:23},
//     {name:"Hasan Niyazi",email:"hasan@gmial.com",age:24},
//     {name:"Viany Kumar",email:"vinay@gmail.com",age:24},
//     {name:"Upendra yadav",email:"upendra@gmail.com",age:23},
// ])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{ console.log(err)});

//----> Now find the all data from the collections

// User.find().then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)});

// ---->Now find the data by some condition

// User.find({age:{$gte:23}}).then((data)=>{console.log(data)})
// .catch((err)=>console.log(err));

// ---->Now find the document data by id from the collectons of Database

// User.findById("6610f6fccac292203f104c6e").then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)});

//----> Find anyOne document of data by using findOne() method

// User.findOne().then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)});

//----> find all ducument data from the collection

// User.find({}).then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)});

// ----> Now find any Document Data by condition

// User.findOne({age:{$gte:23}}).then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)});

//----> Update nay one  doucments values

// User.updateOne({age:{$gte:22}},{age:45}).then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});

//----> Update many documents values at a time

// User.updateMany({age:{$gte:21}},{age:40}).then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});

//----> Find and Update
// User.findOneAndUpdate({name:"Rohir Kumar Patel"},{name:"Rohit patel"},{new:true}).then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)});


//----> Find by id and update

// User.findByIdAndUpdate("6610eee3f983023d17b335f1",{name:"RamR"},{new:true}).then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});

//delete  One documents 

// User.deleteOne({name:{$eq:"Upendra yadav"}}).then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});


// ---> Delete many documents from the collection

// User.deleteMany({age:{$gte:30}}).then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});

//delete by id 
// User.findByIdAndDelete("661128fb307b4762e387256d").then((data)=>{console.log(data)})
// .catch((err)=>{
//     console.log(err)
// });

// find One and delete
// User.findOneAndDelete({age:{$gte:21}}).then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)});

User.deleteMany({age:{$gte:20}}).then((data)=>{console.log(data)})
.catch((err)=>{console.log(err)});

