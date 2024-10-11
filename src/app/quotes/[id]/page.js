import { notFound } from "next/navigation";


export default async function SingleQuote({ params }) {
    let singleQuote = await fetch(`https://dummyjson.com/quotes/${params.id}`)
    singleQuote = await singleQuote.json()
    console.log("response=>", singleQuote);

    if(singleQuote.message){
        notFound();
    }

    return (
        <div className="text-center py-20">
            <h1 className="text-3xl uppercase text-center font-medium">Quotes</h1>
            <div className="border border-purple-400 w-2/3 p-5 text-2xl text-center mx-auto mt-5 items-center">
            <h1 className="leading-9">{singleQuote.quote}</h1>
            <p>Author: <span className="underline text-green-500">{singleQuote.author}</span></p>
            </div>
        </div>

    )
}