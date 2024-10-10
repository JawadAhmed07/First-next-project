import Link from "next/link";
import Card from "../component/card";

// "use client"
const Quotes=async()=>{
    let quotes=await fetch('https://dummyjson.com/quotes')
    quotes=await quotes.json();
    // console.log("quotes=>",quotes)
    return(
        <div className="text-center py-20">
            <h1 className="text-3xl text-center font-medium">Quotes</h1>
        {
            quotes.quotes.map((data)=>(
            <Link key={data.id} href={`/quotes/${data.id}`}>
            <Card key={data.id} author={data.author} quote={data.quote}/>
            </Link>
        ))
        }

        </div>

    );
}

export default Quotes;