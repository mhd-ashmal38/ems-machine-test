// import mongoose
const mongoose=require('mongoose')

// create schema
const loginSchema=new mongoose.Schema({
    f_sno:{
        type:String,
        required:true
    },
    f_userName:{
        type:String,
        required:true,
        trim:true
    },
    f_Pwd:{
        type:String,
        required:true
    }
})

const t_logins=new mongoose.model('t_logins',loginSchema)

module.exports=t_logins