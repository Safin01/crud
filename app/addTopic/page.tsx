"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";
export default function AddTopic(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!title || !description){
            alert("Title and Description are required");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/topics",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({title, description})
            })

            if(res.ok){
                router.push("/");
            }else{
                throw new Error("Failed to create a topic")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col  gap-4">
            <input 
            onChange={(e) => setTitle(e.target.value)}
            value = {title}
            type="text"
            placeholder="Add Topic"
            className="p-3 border border-gray-800"
            />

            <input 
            onChange={(e) => setDescription(e.target.value)}
            value = {description}
            type="text"
            placeholder="Topic Description"
            className="p-3"
            />
            <button type="submit" className="bg-green-500 w-fit px-3 py-3 font-bold">
                Add Topic
            </button>
        </form>
    )
}