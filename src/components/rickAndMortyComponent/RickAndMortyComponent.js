export default function RickAndMortyComponent({item}) {
    return (
        <div>
            {item.id}. {item.name}
            <br/>
            <img src={item.image}/>
        </div>
    )
}