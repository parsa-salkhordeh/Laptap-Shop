import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(){
  await connectDB();



const products = await Product.find()

return NextResponse.json(products)

}
