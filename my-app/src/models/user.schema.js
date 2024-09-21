const {Schema, model} =require("mongoose");
const mongoose=require("mongoose")
const UserSchema= new Schema({
    fullName:{
        type:String,
        required:[true, "username is required"]
    },
    email:{
        type:String,
        required:[true, "email is required"],
        unique:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    birthDate:{
        type:Date,
        required:[true, "birthDate is required"]
    },
    phonNumber:{
        type:Number,
        required:true,
        minLength:10,
        maxLength:12
    }
});

module.exports=mongoose.models.User || model("User", UserSchema)