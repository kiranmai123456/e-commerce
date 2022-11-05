const mongo=require("mongoose");
const Schema=mongo.Schema({
    mail:{
        type:String,
        required:true
    },
    name:{
        type:String,
        reuired:false
    },
    password:{
        type:String,
        require:true
    },
    phno:{
        type:Number,
        reuired:false
    },
    role:{
        type:String,
        reuired:true
    }
},{collection:"user"});

module.exports=mongo.model('Schema',Schema);