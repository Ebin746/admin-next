import { NextResponse } from "next/server";

import {connectMongoDb} from "@/libs/MongoConnect";
import  Product from "@/libs/models/Product" ;

export async function GET(){
    try {
        await connectMongoDb();
        const data=await Product.find();
        NextResponse.json(data);
    } catch (error) {
        NextResponse.json({error,msg:"somthing went worng"},{status:501});
    }
}
