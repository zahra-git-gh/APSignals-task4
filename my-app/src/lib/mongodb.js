const mongoose = require('mongoose');

 const connectMongoDB=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to mongodb")
    } catch (error) {
        console.log("Error connecting to mongodb ", error.massege);
    }
}

module.exports=connectMongoDB