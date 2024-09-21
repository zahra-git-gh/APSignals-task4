import connectMongoDB from "@/lib/mongodb";
import Payment from "@/models/payment.schema";

export async function GET(req, {params}){
    try {
        await connectMongoDB();
        const {id}=params;
        const payment=await Payment.findOne({userId:id});
        return Response.json(payment)
    } catch (error) {
        return Response.json(error)
    }
}

export async function PATCH(req, {params}){
    try {
        await connectMongoDB();
        const data=await req.json();
        const {id}=params;
        const newPayment=await Payment.findByIdAndUpdate(id, data);
        return Response.json(newPayment)
    } catch (error) {
        return Response.json(error)
    }
}