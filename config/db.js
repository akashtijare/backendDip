const mongoose = require("mongoose")

const userSchema = new  mongoose.Schema({
    
    email:String, 
   
    password: String,
    name:String,
})

const blogSchema = new mongoose.Schema({
    Title :String,
    Category :String,
    Author :String,
    Content :String,

})


const connection = mongoose.connect("mongodb+srv://akashtijare708374:TxdeU6mo4eljXWGk@cluster0.fgyodle.mongodb.net/blogs?retryWrites=true&w=majority")


const UserModel = mongoose.model("Users", userSchema)
const BlogModel = mongoose.model("Blogs", blogSchema)

module.exports={connection,UserModel,BlogModel};
