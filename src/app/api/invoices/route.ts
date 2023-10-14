import {NextRequest, NextResponse} from "next/server";
import connectDB from "@/app/lib/mongodb";
import mongoose from 'mongoose'

export async function POST(req: NextRequest, res: NextResponse) {
    const MONGODB_URI =`mongodb+srv://jcerovsky8:${process.env.MONGODB_PASSWORD}@cluster0.ynym5ah.mongodb.net/`
    let client
    try {
         client = await mongoose.connect(MONGODB_URI)
         console.log('db connected')
    } catch (error) {
        return NextResponse.json({msg: ["There was an error - invoice not sent"]})
    }
    const data = await req.json()

    console.log(data)
}