import connectMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";


export async function PUT(request:Request, {params}) {
    const {id} = params;
    const {newTitle:title, newDescription:description} = await request.json();
    await connectMongoDb();
    await Topic.findByIdAndUpdate(id,{title, description});
    return NextResponse.json({message:"Topic Updated"}, {status:200})
    
}

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDb();
    const topic = await Topic.findOne({_id:id});
    return NextResponse.json({topic}, {status:200})
}
