const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/resourcehub")

let login_schema=mongoose.Schema({
   username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    name:String,
    urn:String,
    email:String,

})

let bookSchema=mongoose.Schema({
    BookName:String,
    AuthorName:String,
    OwnerContactEmail:String,
    Subject:String,
    Description:String,

})
let login=mongoose.model("logindetails",login_schema)
let bookmodel=mongoose.model("bookdetails",bookSchema)

module.exports={
    login,
    bookmodel,
}