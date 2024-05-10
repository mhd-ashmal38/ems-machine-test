const mongoose = require('mongoose')
const validator = require('validator')

const employeeSchema = new mongoose.Schema({
    f_Id:{
        type: Number,
        unique: true,
        required: true,
        default: 101 // Start from 101
    },
    f_Name: {
        type: String,
        required: true,
        trim: true
    },
    f_Email: {
        type: String,
        required: true,
        unique: true,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw Error('invalid Email')
            }
        }
    },
    f_Mobile:{
        type:String,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10
    },
    f_Designation:{
        type:String,
        required:true
    },
    f_Gender:{
        type:String,
        required:true
    },
    f_Course:{
        type:String,
        required:true
    },
    f_Image:{
        type:String,
        required:true
    },
    f_Createdate:{
        type: Date,
        default: Date.now
    }
})

const t_employees=new mongoose.model('t_employees',employeeSchema)

module.exports=t_employees