import { connectMongoDb } from "@/libs/MongoConnect";
import Product from "@/libs/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { imgSrc, fileKey, name, price, category } = body;
    
    try {
        await connectMongoDb();
        const _id= Math.round(Math.random() * Date.now() * 100000).toString();
        const data = await Product.create({ _id,imgSrc, fileKey, name, price, category });
        return NextResponse.json({ message: "successfully added product", data }, { status: 200 });
    } catch (error) {
        console.error("Error occurred while adding product:", error);
        return NextResponse.json({ message: "internal error", error }, { status: 501 });
    }
}

