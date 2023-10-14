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

  const invoiceId = data.invoiceId;

  try {
    await collection.updateOne(
      { invoiceId: invoiceId },
      { $set: data },
      { upsert: true },
    );
    console.log("data inserted");
    await client.close();
    return res.json();
  } catch (error) {
    await client.close();
  }
}
