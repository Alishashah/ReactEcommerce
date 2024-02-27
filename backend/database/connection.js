const mongoose=require("mongoose")
require("dotenv").config()
const DATABASE=process.env.DATABASE

const database= async()=>{
    await mongoose.connect(DATABASE)
}
module.exports=database