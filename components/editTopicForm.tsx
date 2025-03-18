"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";
export default function EditTopicForm({id, title, description}) {

    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const router = useRouter();

    const handleSubmit = async (e) =>{
      e.preventDefault();


      try {
          const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
            method:"PUT",
            headers:{
              "Content-type":"application/json",
            },
            body:JSON.stringify({newTitle,newDescription})
          })

          if(!res.ok){
            throw new Error("failed to update data")
          }

          router.refresh();
          router.push("/");
          
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col  gap-4">
            <input 
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
            type="text"
            placeholder="Add Topic"
            className="p-3 border border-gray-800"
            />

            <input 
            onChange={(e) => setNewDescription(e.target.value)}
            value={newDescription}
            type="text"
            placeholder="Topic Description"
            className="p-3"
            />
            <button className="bg-green-500 w-fit px-3 py-3 font-bold">
                Update Topic
            </button>
        </form>
  )
}
