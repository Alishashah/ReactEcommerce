const Practicedata = require("../models/shoesmodel");
// const initdata=require("../initdata/shoes")
const shoescontroller = {
  initDB: async (req, res) => {
    // await Practicedata.deleteMany({})
    // await Practicedata.insertMany(initdata.data)
    const dataget = await Practicedata.find();
    console.log(dataget);
    res.json({
      data: dataget,
      messsage: "data get successfully",
    });
    console.log("data was saved");
  },

  iddata: async (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    const data = await Practicedata.findById({ _id: id });
    return res.json({ data: data, message: "product fetched " });
  },

   
};
module.exports = shoescontroller;
