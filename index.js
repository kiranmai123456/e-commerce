const express=require("express");
const a=express();
const bodyparser=require("body-parser");
const mongo=require("mongoose");
const proutes=require("./routes/pro_routes.js");
const uroutes=require("./routes/user_routes.js");
const env=require("dotenv");
env.config();

//connect mongodb
mongo.connect(process.env.o_db,{useNewUrlParser:true},()=>{
    console.log("db connected........")
});

//use bodyparser
a.use(bodyparser.json());

// use routes
a.use("/product",proutes);
a.use("/user",uroutes);

a.get('/',(req,res)=>{
    res.send("Hello world")
})

//listening
a.listen(2048,()=>{console.log("iam hearing at 2048...")});

