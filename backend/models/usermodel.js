const mongoose =require("mongoose")
const Schema=mongoose.Schema


const userschema=new Schema({

    username:{
        type:String,
        required:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        lowercase:true
    }

},{})

const User=mongoose.model("User",userschema)

module.exports=User