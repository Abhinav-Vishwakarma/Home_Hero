//mongodb+srv://Home_Hero:2023B1531060@cluster0.jhyr7gj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express =require('express')
const connectDB=require('./db.js')
const app=express();

const app=require('./Models/item.js')

connectDB()
app.listen(3000,()=>{
    console.log("app is running")
})