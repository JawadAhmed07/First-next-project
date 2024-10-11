import Link from "next/link";



export default function notFound(){
    return (
        <div className="text-center min-h-screen text-3xl mx-auto px-auto">
            <h1 className="m-10">Page not found</h1>
        <Link className="bg-purple-300 p-2 px-4 rounded border-black text-white" href={"/quotes"}>
            See all quotes available
        </Link>
        
        </div>
    )
}