const mongoose= require("mongoose")

const studentSchma= new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    classId :{
        type:Number,
        required:true
    }
})

const classSchma= new mongoose.Schema({
    class: {studentSchma}, 
    studentsCount : {
        type:Number,
        required:true
    }

})

const User= mongoose.model("users",classSchma)
module.exports=User