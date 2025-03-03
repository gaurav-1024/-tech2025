const express= require("express")
const path=require("path")
const {router}=require("./routes/urls")
const session=require("express-session")
const multer  = require('multer')
let app=express()


app.set("view engine","ejs")
app.set("views",path.resolve("./views/ejs"))
app.use(express.static(path.resolve("./views")))
app.use(express.urlencoded())
app.use(session({secret:"this is secrete"}))

app.use("/",router)


app.listen("2000",()=>{
    console.log("server is starting")
})
