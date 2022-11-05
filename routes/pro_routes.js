const express=require("express");
const router=express.Router();
const schema=require("../model/schema.js");

//post
router.post('/post',async (req,res)=>{
    const sc=await new schema({
        p_id:req.body.p_id,
        p_name:req.body.p_name,
        p_price:req.body.p_price,
        p_category:req.body.p_category
    })
    try{
        await sc.save();
        res.send("posted....");
    }
    catch(err){
        res.send(err);
    }
});

//get
router.get("/get",async (req,res)=>{
    const posts=await schema.find();
    res.send(posts);
});


module.exports = router