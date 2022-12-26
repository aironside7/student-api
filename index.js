const express= require("express")
const app= express()
require("./conn")
const User = require("./model")
// app.use(express.json())
const bodyparser= require("body-parser")
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

const port= 3000
app.get("/",(req,res)=>{
    res.send("hello")
})

app.post("/v1/myClass", async (req,res)=>{
    try{
        const addclass= new User(req.body)
        const insertClass = await addclass.save()
        res.send(insertClass)
    }catch(e){
          res.send(e)
    }

})
app.post("/v1/myClass/students", async (req,res)=>{
    try{
        const addclass= new User(req.body)
        const insertClass = await addclass.save()
        res.send(insertClass)
    }catch(e){
          res.send(e)
    }

})

app.get("/v1/myClass", async(req,res)=>{
    try{
        const getuser= await User.find()
        res.send(getuser)
    }catch(e){
        res.status(400).send(e)
    }
})
app.put(("/v1/myClass/students/:id"),async(req,res)=>{

    try{
        const _id=req.params.id
        const classdata= await User.findByIdAndUpdate(_id,req.body)
        res.send(classdata)}
        catch(e){
            res.status(400).send(e)
        }
    
})
app.delete(("/v1/myClass/:id"),async(req,res)=>{
     try{
          const deldata=await User.findByIdAndDelete(req.params.id)
          res.json({
            messege:"deleted"
          })
     }
        catch(e){
            res.status(500).send(e)
        }
})
app.listen(port,()=>{
    console.log(`connection succesfull port ${port}` )
})