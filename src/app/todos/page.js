import Link from "next/link";

// just pushing on github

export default async function Todos() {

    let res = await fetch("http://localhost:3000/api/todos")
    res = await res.json();
    return (
        <div className="min-h-screen p-10">
            <h1 className="text-3xl font-bold text-center">This is Todos page</h1>
            {
                res.data?.map((todo) => {
                    return (
                        <Link key={todo} href={`/todo/${todo}`}>
                        <h1 className="text-center my-5 itms-center border text-3xl w-2/3 mx-auto">{todo}</h1>
                        <h1>todos fetched</h1>
                    </Link>
                    )
                })
            }
        </div>
    );
}