import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const newSubmission = {
      id: `sub_${Date.now()}`,
      name,
      email,
      phone: phone || "",
      company: company || "",
      message,
      date: new Date().toISOString(),
      status: "New" as const,
    };

    // Connect to MongoDB and insert
    const client = await clientPromise;
    const db = client.db("ozclu");
    await db.collection("submissions").insertOne(newSubmission);

    return NextResponse.json({ success: true, submission: newSubmission });
  } catch (error) {
    console.error("API Error submitting contact form:", error);
    return NextResponse.json(
      { error: "Internal server error occurred while saving submission." },
      { status: 500 }
    );
  }
}

