export default function Album({albums}) {
    return(
        <div>
            <div>userId:{albums.userId}</div>
            <div>id:{albums.id}</div>
            <div>title:{albums.title}</div>
            <hr/>
        </div>
    )
}