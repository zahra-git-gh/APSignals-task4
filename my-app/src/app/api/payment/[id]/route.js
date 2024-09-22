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
