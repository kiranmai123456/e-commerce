const express=require("express");
const bcrypt=require("bcrypt");
const router=express.Router();
const schema=require("../model/user_schema");
const jswt=require("jsonwebtoken");

//register
router.post("/register",async (req,res)=>{
    const user=await schema.findOne({mail:req.body.mail});
    if(user) return res.send("user already existed..");
    
    //hashing password
    const salt=await bcrypt.genSalt(10);
    const hash=await bcrypt.hash(req.body.password,salt);

    //storing the data
    const data=new schema({
        mail:req.body.mail,
        name:req.body.name,
        password:hash,
        phno:req.body.phno,
        role:req.body.role
    });
    try{
        await data.save();
        res.send("registered....");
    }
    catch(err){
        res.send(err.message);
    }
});

//login
router.post("/login",async(req,res)=>{
    const user=await schema.findOne({mail:req.body.mail});
    if(!user) return res.send("user not existed...");

    const pass=await bcrypt.compare(req.body.password,user.password);
    if(!pass) return res.send("invalid password..");

    const token=await jswt.sign({mail:user.mail},process.env.token);
    res.header('auth-token',token).send(token);

})

router.get('/get',(req,res)=>{
    res.send("hello")
})

module.exports = router