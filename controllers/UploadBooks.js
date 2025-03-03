

const {bookmodel}=require("../models/connections")

async function UploadBooks(req,res){
    let {bookname,author,email,subject,desc}=req.body()
    bookmodel.create({
        BookName:bookname,
        AuthorName:author,
        OwnerContactEmail:email,
        Subject:subject,
        Description:desc,
    })
    res.send("book uploaded")
}

module.exports={
    UploadBooks,
}