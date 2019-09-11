const mongoose=require("mongoose");

const Db=mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },phone:{
        type:String,
        required:true
    }

})
const Contact=module.exports=mongoose.model('contact',Db)