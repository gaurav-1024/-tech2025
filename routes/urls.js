const express= require("express")
const multer  = require('multer');
const path = require('path');

// Configure Multer Storage to Rename File
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        cb(null,file.originalname);
    }
});

const upload = multer({ storage: storage }); 


const {HomePage}=require("../controllers/HomePage")
const {Login,Register}=require("../controllers/Login")
const {UploadBooks}=require("../controllers/UploadBooks")
let router=express.Router()

router.get("/",HomePage)
router.get("/registerpage",(req,res)=>{
    res.render("RegisterPage")
})
router.post("/register",Register)
router.post("/login",Login)
router.post("/books",upload.single('files'),UploadBooks)

module.exports={
    router,
}