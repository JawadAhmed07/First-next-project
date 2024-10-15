


const Todos=[
    {
        todo:"Tasssk 1",
        isCompleted:false,
    },
    {
        todo:"Task 2",
        isCompleted:false,
    },
    {
        todo:"Task 3",
        isCompleted:false,
    },
    {
        todo:"Task 4",
        isCompleted:false,
    },
]
export async function GET(request){
    return Response.json({
        data:Todos,
        msg:"Todos fetch successfully"
    })
}