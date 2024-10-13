import Link from "next/link";
import Card from "../component/card";

export const revalidate = 10 // revalidate at most every hour
// "use client"
const Quotes=async()=>{


    let quotes=await fetch('https://dummyjson.com/quotes/random',{
        // cache: "no-cache"
    })
    quotes=await quotes.json();
    // console.log("quotes=>",quotes)
    return(
        <div className="text-center py-20">
            <h1 className="text-3xl text-center font-medium">Quotes</h1>
        {/* {
             quotes.quotes.map((data)=>(
             <Link key={data.id} href={`/quotes/${data.id}`}>
             </Link>
             ))
             } */}
             <Card author={quotes.author}  quote={quotes.quote}/>
             {/* continue onward from new laptop */}

        </div>

    );
}

export default Quotes;