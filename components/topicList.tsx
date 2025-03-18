import RemoveBtn from "./removeBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";


const getTopics = async () =>{
    try {
        const res =await fetch("http://localhost:3000/api/topics",{
            cache:"no-store",
        })

        if(!res.ok){
            throw new Error("Failed to fetch topics")
        }

        return res.json();
    } catch (error) {
        console.log("Failed to fetch data",error)
    }
}


export default async function TopicList() {

    const {topics} = await getTopics();
  return (
    <>  {topics.map((t) => (
        <div className="flex justify-between p-4 mx-3 my-4 border border-gray-700 items-start" key={t._id}>
            <div>
                <h2 className="font-bold text-2xl">{t.title}</h2>
                <div>{t.description}</div>
            </div>

            <div className="flex items-center">
                <RemoveBtn id={t._id}/>
                <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24}/>
                </Link>
            </div>
        </div>
        ))}
    </>
)
}
