export default function DogComponent({dog , dispatch}) {
    return(
        <div>
            Dog:{dog.name}
            <button onClick={()=> {{dispatch({type:'deleteDog',payload: dog.id})}}}>Himars</button>
        </div>
    )
}