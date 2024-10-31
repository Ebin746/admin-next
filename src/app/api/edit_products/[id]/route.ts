import { connectMongoDb } from "@/libs/MongoConnect";
import Product from "@/libs/models/Product";
import { NextRequest,NextResponse } from "next/server";

export async function PUT(request:NextRequest,URLParams:any) {
    const body=await request.json();
    const id=URLParams.params.id;
    if(!id){
        return NextResponse.json({message:"id is missing"},{status:400});
    }
    const {name,category,price}=body;
    try {
  
        await connectMongoDb();
        const data = await Product.findByIdAndUpdate(id, {
            name,
            category,
            price
        }, { new: true });
        
        if (!data) {
            return NextResponse.json({ message: "Data not found" }, { status: 404 });
        }
        
        return NextResponse.json({message:"successfully updated the content",data},{status:200});
    } catch (error) {
        console.error(error);
        return NextResponse.json({message:"internal error",error},{status:501});
    }
}