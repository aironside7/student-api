const mongoose= require("mongoose")
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/studentapp")
    // mongoose.set('strictQuery', true)

.then(()=>{
    console.log("connection with database succes")
}).catch((err)=>{
    console.log(err)
})
