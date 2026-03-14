//* هنحدد شكل البيانات هيكون عامل ازاي

const mongoose = require("mongoose")
const validator = require("validator")
const { type } = require("os")


const userDate = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        toLowerCase : true,
        unique : true,
        trim : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    age : {
        type : Number,
        default : 18,
        validate(value){
            if(value <= 0){
                throw new Error("Age must be psotive!❌")
            }
        }
    },
    password : {
        type : String,
        required : true,
        trim : true
    },

    // createAt : {
    //     type : String,
    //     default : new Date().toLocaleString()
    // }
} , {timestamps : true})  //? دي بتاعت التوقيت اسهل 



const User = mongoose.model("User" , userDate)
module.exports = User