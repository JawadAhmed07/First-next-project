import Quotes from "./page";


const Card=({author,quote })=>{
    return (
        <div className="border w-2/3 mx-auto m-5 border-pink-700">
            <h1 className="font-semibold text-2xl">{quote}</h1>
            <h1 className="font-normal text-green-500 text-xl">Quote by: <span className="underline">{author}</span> </h1>
        </div>
    )
}

export default Card;