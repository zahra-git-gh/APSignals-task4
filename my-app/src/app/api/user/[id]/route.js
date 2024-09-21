import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user.schema";
export async function GET(req, {params}){
    try {
        await connectMongoDB();
        const {id}=params;
        const user= await User.findById(id);
        return Response.json(user)
    } catch (error) {
        return Response.json(error)
    }
}