const shoescontroller=require("../controllers/shoesdata")
const router=require("express").Router()

router.get("/shoesdata",shoescontroller.initDB)
router.get("/shoesdata/:id",shoescontroller.iddata)

module.exports=router