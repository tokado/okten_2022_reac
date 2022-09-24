export default function Todo({todos}) {
    return (
        <div>
            <div>userId:{todos.userId}</div>
            <div>id:{todos.id}</div>
            <div>title:{todos.title}</div>
            <div>completed:{todos.completed}</div>
            <hr/>
        </div>
    )
}