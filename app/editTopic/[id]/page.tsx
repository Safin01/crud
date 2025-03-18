import EditTopicForm from "@/components/editTopicForm";

const getTopicByID = async (id) =>{
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
      cache:"no-store",
    })

    if(!res.ok){
      throw new Error("failed to fetch topic")
    }

    return res.json();
  } catch (error) {
    console.log(error)
  }
}


export default async function EditTopic({params}) {
  const {id} = params;
  const {topic} = await getTopicByID(id);
  const {title, description} = topic;
  console.log("id: ", id);
  return (
    <EditTopicForm id={id} title={title} description={description}/>
  )
}
