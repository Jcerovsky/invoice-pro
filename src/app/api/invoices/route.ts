import {NextResponse} from "next/server";

export async function POST(req) {
    const newInvoiceData = await req.json()
    console.log('newInvoiceData:',newInvoiceData)
    return NextResponse.json({msg: 'hello from invoices route'})
}