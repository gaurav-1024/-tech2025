let {bookmodel}=require("../models/connections")

async function fetchBooks(req,res) {
    let name=req.params.name
    console.log(name)
    let data=await bookmodel.find({ BookName: { $regex: new RegExp(`^${name}`, "i") } });
    console.log(data)
    res.json(data)
}
module.exports={
    fetchBooks,
}