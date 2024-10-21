// import ListItem from "@/component/ListItem";
// import TodoForm from "@/component/TodoForm";

// export default async function Todos() {
//     // Fetch todos from the API
//     let res = await fetch("http://localhost:3000/api/todos", {
//         cache: "no-cache"
//     });
//     let data = await res.json();

//     return (
//         <div className="min-h-screen">
//             <h1 className="text-center text-3xl font-bold my-10">This is Todos page</h1>
            
//             {/* Form to add a new todo */}
//            <TodoForm/>
            
//             {/* List all todos */}
//             {
//                 data.data?.map((todo) => {
//                     return (
//                         <ListItem/>
//                     );
//                 })
//             }
//         </div>
//     );
// }


import ListItem from "@/component/ListItem";
import TodoForm from "@/component/TodoForm";

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
            <TodoForm />
            
            {/* List all todos */}
            {
                data.data?.map((todo) => {
                    return (
                        // Pass the `todo` object as a prop to the ListItem component
                        <ListItem key={todo.id} todo={todo} />

                    );
                })
            }
        </div>
    );
}
