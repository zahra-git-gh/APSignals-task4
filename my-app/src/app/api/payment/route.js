import connectMongoDB from "@/lib/mongodb";
import Payment from "@/models/payment.schema";

export async function POST(req){
    try {
        await connectMongoDB();
        const paymentData=await req.json();
        const newPayment=await Payment.create(paymentData);
        return Response.json(newPayment)
    } catch (error) {
        return Response.json(error)
    }
}