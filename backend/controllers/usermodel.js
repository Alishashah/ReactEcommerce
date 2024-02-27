const Datauser=require("../controllers/usermodel")

const usercontroller={
    setuserdata:async(req,res)=>{
        const{username,email,password}=req.body
          const userdata=Datauser.create({
              username:username,
              email:email,
              password:password
          })

        const savedata=userdata.save()
        res.json({
            data:savedata,
            message:"data saved"
        })
    },

    getuserdata:async(req,res)=>{
          const userinfo=Datauser.find()

          res.json({
            data:userinfo,
            message:"data get"
          })
    },

    deleteuser:async(req,res)=>{
        const {id}=req.params;
        const deleteuser= await Datauser.

    }

}

module.exports=usercontroller