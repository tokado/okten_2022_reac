import React, {useEffect, useState} from 'react';
import {spacesAxios} from "../service/space.service/space.axios.service";
import SpaceComponent from "../components/spaceComponent/SpaceComponent";

const Space = () => {
    let [space,setSpace] = useState([])
    useEffect(()=>{
        spacesAxios().then(value => {
            setSpace(value.data.filter(space => space.launch_year < 2020))
        })
    },[])
    return (
        <div>
            {
                space?.map(value => <SpaceComponent key={value.flight_number} item={value}/>)
            }
        </div>
    );
};

export default Space;