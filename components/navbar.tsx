import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="flex justify-between items-center mx-3 bg-linear-to-br from-gray-400 to-gray-900 px-8 py-3 mt-3.5 text-white">
            <Link href={"/"}>Safin</Link>
            <Link className="bg-white p-2 font-bold text-black" href={"/addTopic"}>Add Topic</Link>
        </nav>
    )
}