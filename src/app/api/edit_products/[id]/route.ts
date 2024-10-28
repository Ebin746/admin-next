import { connectMongoDb } from "@/libs/MongoConnect";
import Product from "@/libs/models/Product";
import { NextRequest,NextResponse } from "next/server";

export async function PUT(request:NextRequest,URLParams:any) {
    try {
        const body=await request.json();
        const id=URLParams.params.id;
        if(!id){
            return NextResponse.json({message:"id is missing"},{status:401});
        }
        const {name,category,price}=body;
        await connectMongoDb();
        const data=await Product.findByIdAndUpdate(id,{
            name,category,price
        })
        return NextResponse.json({message:"successfully updated the content",data},{status:200});
    } catch (error) {
        console.error(error);
        return NextResponse.json({message:"internal error",error},{status:501});
    }
}