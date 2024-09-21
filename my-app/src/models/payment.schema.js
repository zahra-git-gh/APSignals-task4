const mongoose =require("mongoose");
const {Schema, model}=mongoose;

const PaymentSchema=new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    totalAmount:{
        type:Number,
        required:true
    },
    month:{
        type:Number,
        required:true
    },
    amountPaid:{
        type:Number,
    },
    startMonth:{
        type:String,
        default:()=> new Date().toLocaleString('default', { month: 'long' })
    }
})
PaymentSchema.pre("save", async function () {
    this.amountPaid=Math.round(this.totalAmount / this.month)
})
module.exports=mongoose.models.Payment || model("Payment", PaymentSchema);