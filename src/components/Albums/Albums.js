import React, {useEffect, useState} from 'react';
import {service} from "../../service/axios.service";
import Album from "../Album/Album";

const Albums = () => {
    let [albums, setAlbums] = useState([])
    useEffect(() => {
        service.getAllAlbums().then(value =>
            setAlbums(value.data)
        )
    }, [])
    return (
        <div>
            {
                albums.map(value => <Album key={value.id} albums={value} />)
            }
        </div>
    );
};

export default Albums;