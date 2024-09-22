const mongoose = require('mongoose');

global.mongoose={
    conn:null,
    promise:null
};
 const connectMongoDB=async ()=>{
    try {
        if(global.mongoose && global.mongoose.conn){
            console.log("connected from previous");
            return global.mongoose.conn
        }else{
            const promise=mongoose.connect(process.env.MONGO_URI, {
                autoIndex:true
            });
            global.mongoose={
                conn:await promise,
                promise,
            }
            console.log("connected to mongodb")
            return await promise
        }
    } catch (error) {
        console.log("Error connecting to mongodb ", error.massege);
    }
}

module.exports=connectMongoDB