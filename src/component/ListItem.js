import { Link } from "lucide-react";

export default function ListItem({ todo }) {
    return (
        <Link key={todo.id} href={`/todo/${todo.id}`}>
            <h1 className="text-center my-5 items-center border text-3xl w-2/3 mx-auto">
                {todo.todo}
            </h1>
        </Link>
    );
}
