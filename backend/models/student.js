const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
   
        name:{
            type:String
        },
        phone:{
            type:Number
        },
        age:{
            type:Number
        },
        chessno:{
         type:Number
        },
        events:{
            type:Array,
            default:[]
        }
       

    },
    { timestamps: true }
);


const student = mongoose.model("student", studentSchema );
module.exports = student