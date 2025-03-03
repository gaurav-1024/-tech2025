
const {login}=require("../models/connections")

async function Login(req,res){
    let {user,pass}=req.body
    console.log(user+pass)
    let data= await login.findOne({username:user,password:pass})
    if(data){
        req.session.userid=data._id
        res.render("BookUpload")
    }
    else{
        req.session.error="Invalid username or password"
        console.log("error")
        res.redirect("/")
    }
}


async function Register(req,res){
    let {user,pass,name,urn,email}=req.body
    await login.create({username:user,password:pass,name:name,urn:urn,email:email})
    res.redirect("/")
}

module.exports={
    Login,
    Register,
}