import connectMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { title, description } = await request.json();
    await connectMongoDb(); // Connect to DB
    const newTopic = await Topic.create({ title, description });
    return NextResponse.json({ message: "Topic Created", data: newTopic }, { status: 201 });
  } catch (error) {
    console.log("Error:", error);
    return NextResponse.json({ message: "Internal Server Error", error: error }, { status: 500 });
  }
}

export async function GET() {
    await connectMongoDb();
    const topics = await Topic.find();
    return NextResponse.json({topics});
}


export async function DELETE(request:any){
    const id = request.nextUrl.searchParams.get("id")
    await connectMongoDb();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"Topic Deleted"},{status:200});
}