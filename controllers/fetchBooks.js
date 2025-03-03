let {bookmodel}=require("../models/connections")

async function fetchBooks(req,res) {
    let name=req.params.name
    let data=await bookmodel.find({ BookName: { $regex: new RegExp(`^${name}`, "i") } });
    console.log(data[0].name)
    res.json(data)
}
module.exports={
    fetchBooks,
}