import {NextRequest, NextResponse} from "next/server";
import connectDB from "@/app/lib/mongodb";

export async function POST() {
    try {
        await connectDB()
        return NextResponse.json({
            msg: ['Invoice sent successfully'],
            success: true,
        })
    } catch (error) {
        return NextResponse.json({msg: ["There was an error - invoice not sent"]})
    }
    return NextResponse.json({msg: 'hello from invoices route'})
}