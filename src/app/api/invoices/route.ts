import connectDB from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  let client = await connectDB();

  if (!client) {
    return res.json();
  }

  const data = await req.json();
  const db = client.db("invoice");
  const collection = db.collection("invoice");

  try {
    await collection.insertOne(data);
    console.log("data inserted");
    await client.close();
    return res.json();
  } catch (error) {
    await client.close();
  }
}
