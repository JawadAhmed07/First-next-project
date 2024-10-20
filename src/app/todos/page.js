// import { Button } from "@/components/ui/button";
import AddTodo from "@/actions/todos";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default async function Todos() {
    // Fetch todos from the API
    let res = await fetch("http://localhost:3000/api/todos", {
        cache: "no-cache"
    });
    let data = await res.json();

    return (
        <div className="min-h-screen">
            <h1 className="text-center text-3xl font-bold my-10">This is Todos page</h1>
            
            {/* Form to add a new todo */}
            <form action={AddTodo} className="flex gap-2 mx-auto w-2/3">
                <input
                    className="border-2 mx-auto border-purple-500 flex-grow p-2"
                    placeholder="Enter todo here"
                    type="text"
                    name="todo"  // Ensure 'todo' matches what you access in AddTodo
                />
                <input
                    type="submit"
                    value="Add Todo"
                    className="border rounded cursor-pointer bg-purple-200 px-4"
                />
            </form>
            
            {/* List all todos */}
            {
                data.data?.map((todo) => {
                    return (
                        <Link key={todo.id} href={`/todo/${todo.id}`}>
                            <h1 className="text-center my-5 items-center border text-3xl w-2/3 mx-auto">
                                {todo.todo}
                            </h1>
                        </Link>
                    );
                })
            }
        </div>
    );
}
