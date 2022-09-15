export default function UserComponent({item,clickButton}) {
    return(
        <div>
            {item.id}.{item.name}
            <button onClick={()=>{
                clickButton(item.email)
            }
            }>info</button>
        </div>
    )
}