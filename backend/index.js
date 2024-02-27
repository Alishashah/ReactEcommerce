const express=require("express")
const app=express();
require("dotenv").config()
const PORT=process.env.PORT
const database=require("./database/connection")
const router=require("./routes/route")
const cors=require("cors")
app.use(cors())
app.use(express.json())
database().then((res)=>{
    console.log("database connected");
}).catch((err)=>{
    console.log("err");
})

app.use(router)


app.listen(PORT,()=>{
    console.log(("Shomes connect"));
})