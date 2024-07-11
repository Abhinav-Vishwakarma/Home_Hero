const mongoose =require('mongoose');

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect('mongodb+srv://Home_Hero:2023B1531060@cluster0.jhyr7gj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log(`MongoDB Connected: ${conn.connection.host}`);

    }catch(error){
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;