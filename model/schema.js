const mongo=require("mongoose");
const schema=mongo.Schema({
    p_id:{
        type: Number,
        required:true
    },
    p_name:{
        type:String,
        required:true
    },
    p_price:{
        type:Number,
        required:true
    },
    p_category:{
        type:String,
        default:" "
    }
},{collection:"product"});

module.exports=mongo.model('schema',schema);