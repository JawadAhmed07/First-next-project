


const Todos=[
    {
        todo:"Task 1",
        isCompleted:false,
        id:1
    },
    {
        todo:"Task 2",
        isCompleted:false,
        id:2
    },
    {
        todo:"Task 3",
        isCompleted:false,
        id:3
    },
    {
        todo:"Task 4",
        isCompleted:false,
        id:4
    },
]
export async function GET(request){
    return Response.json({
        data:Todos,
        msg:"Todos fetch successfully"
    })
}

// export async function GET(request){
// }