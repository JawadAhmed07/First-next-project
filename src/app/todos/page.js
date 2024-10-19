// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// // just pushing on github
// // just pushing on github



// export default async function Todos() {

//     let res = await fetch("http://localhost:3000/api/todos",{
//         cache:"no-cache"
//     })
//     res = await res.json();
//     return (
//         <div className="min-h-screen p-10">
//             <h1 className="text-3xl font-bold text-center">This is Todos page</h1>
//             <div className="w-2/3 mx-auto flex gap-2 ">
//                 <input
//                 placeholder="Add todo"
//                 className="border border-purple-200 flex-grow p-2"
//                 type="text"/>
//                 <Button>Add todo</Button>
//             </div>
//             {
//                 res.data?.map((todo) => {
//                     return (
//                         <Link key={todo.id} href={`/todo/${todo.id}`}>
//                         <h1 className="text-center my-5 itms-center border text-3xl w-2/3 mx-auto">{todo.todo}</h1>
//                     </Link>
//                     )
//                 })
//             }
//         </div>
//     );
// }