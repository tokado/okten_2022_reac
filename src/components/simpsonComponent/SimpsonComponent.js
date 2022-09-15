export default function SimpsonComponent({item}) {
    return (
        <div>
            {item.id+1}.{item.name}
            <br/>
            <img src={item.url}/>
        </div>
    )
}