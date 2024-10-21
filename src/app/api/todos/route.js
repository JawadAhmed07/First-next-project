
let Todos = [
    {
        todo: "Task1",
        isCompleted: false,
        id: 1,
    },
    {
        todo: "Task2",
        isCompleted: false,
        id: 2,
    },
    {
        todo: "Task3",
        isCompleted: false,
        id: 3,
    },
    {
        todo: "Task4",
        isCompleted: false,
        id: 4,
    },
    {
        todo: "Task5",
        isCompleted: false,
        id: 5,
    },
];

export async function GET(request) {
    return new Response(
        JSON.stringify({
            data: Todos,
            msg: "Todos fetched successfully",
        }),
        { headers: { "Content-Type": "application/json" } }
    );
}

export async function POST(request) {
    const data = await request.json();  // Parse the incoming JSON data
    
    const newTodo = {
        ...data,
        isCompleted: false,
        id: Todos.length + 1,
    };

    Todos.push(newTodo);
    

    console.log("Data from frontend:", data);

    return new Response(
        JSON.stringify({
            data: Todos,
            msg: "Todo added successfully",
        }),
        { headers: { "Content-Type": "application/json" } }
    );
}
