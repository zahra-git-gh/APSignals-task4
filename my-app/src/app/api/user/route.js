const connectMongoDB=require("@/lib/mongodb");
import User from "@/models/user.schema"
export async function POST(req){
    try {
        await connectMongoDB();
        const userData=await req.json();
        const newUser=await User.create(userData);
        console.log(newUser);
        return Response.json(newUser)
    } catch (error) {
       return Response.json(error)
    }
}