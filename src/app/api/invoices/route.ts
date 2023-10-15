import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import { IInvoice } from "@/app/context/Context";

export async function POST(req: NextRequest, res: NextApiResponse) {
  const client = await connectDB();

  if (!client) {
    return res.status(500).json({ error: "Could not connect to database" });
  }
  const db = client.db("invoice");
  const collection = db.collection("invoice");
  const data: IInvoice = await req.json();
  const invoiceId = data.id;

  try {
    await collection.updateOne(
      { invoiceId: invoiceId },
      { $set: data },
      { upsert: true },
    );
    await client.close();
    return res.status(201).json({ message: "Invoice saved successfully" });
  } catch (error) {
    await client.close();
    return res
      .status(500)
      .json({ error: "An error occurred while saving invoice" });
  }
}

export async function GET(req: NextRequest, res: NextApiResponse) {
  const client = await connectDB();
  if (!client) {
    return res.status(500).json({ error: "Could not connect to database" });
  }

  const db = client.db("invoice");
  const collection = db.collection("invoice");

  try {
    const data = await collection.find().toArray();
    await client.close();
    return NextResponse.json(data);
  } catch (error) {
    await client.close();
    return res.status(500).json({ error: "There was an error fetching data" });
  }
}

export async function DELETE(req: NextRequest, res: NextApiResponse) {
  const client = await connectDB();

  if (!client) {
    return res.status(500).json({ error: "Could not connect to database" });
  }

  const db = client.db("invoice");
  const collection = db.collection("invoice");
  const invoiceId = await req.json();

  try {
    await collection.deleteOne({ invoiceId: invoiceId });
    await client.close();
    return res.json({ message: "Successfully deleted invoice" });
  } catch (error) {
    await client.close();
    return res.status(500).json({ error: "Could not delete invoice" });
  }
}

export async function PATCH(req: NextRequest, res: NextApiResponse) {
  const client = await connectDB();

  if (!client) {
    return res.status(500).json({ error: "Could not connect to database" });
  }

  const db = client.db("invoice");
  const collection = db.collection("invoice");
  const data: IInvoice = await req.json();
  const invoiceId = data.id;

  try {
    await collection.updateOne(
      { invoiceId: invoiceId },
      { $set: { status: "paid" } },
    );
    await client.close();
    return res.json({ message: "Updated invoice successfully" });
  } catch (error) {
    await client.close();
    return res.status(500).json({ error: "Could not update database" });
  }
}
