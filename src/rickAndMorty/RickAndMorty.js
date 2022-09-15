import {useEffect, useState} from "react";
import RickAndMortyComponent from "../components/rickAndMortyComponent/RickAndMortyComponent";

export default function RickAndMorty() {
    let [rickAndMorty,setRickAndMorty] = useState([])
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
            .then(value => value.json())
            .then(value => setRickAndMorty(value.results)
            )
    },[])

    return (
        <div>
            {
                rickAndMorty.map((value) => (<RickAndMortyComponent key={value.id} item={value}/>))
            }
        </div>
    )
}