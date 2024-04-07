const mongoose = require('mongoose');

main().then((res)=>{
    console.log("Connection successfull...");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const bookSchema=new mongoose.Schema({
    tittle:{
        type:String,
        required:true,
    },
    auther:{
        type:String,
    },
    price:{
        type:Number,
        min:[2,"Please enter valid price of book"],
    },
    discount:{
        type:Number,
        default:20,
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"],
    }
    
});


// creating the collection in the databases by using  model

const book=mongoose.model("book",bookSchema);
// const book1=new book({
//     tittle:"English",
//     auther:"md sharma",
//     price:563,
//     category:"fiction",
// });
// book1.save().then((data)=>{console.log(data)}))});
// .catch((err)=>{console.log(err.errors.price.properties.message)});

book.findByIdAndUpdate("66113cd7b638df7a2d308dd8",{price:-200},{runValidators:true}).then((data)=>{console.log(data)})
.catch((err)=>{console.log(err.errors.price.properties.message)});



