import React, {useEffect, useState} from 'react';

import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";
import {CarsService} from "../../service/cars.service";

const Cars = () => {
    let [cars,setCars] = useState([])
    useEffect(()=>{
        CarsService.getAll().then(value => setCars(value.data))

    },[])
    return (
        <div>
            <div><CarForm setCars={setCars}/></div>
            <div><br/></div>
            {
                cars.map(value => <Car key={value.id} item={value}/>)
            }
        </div>
    );
};

export default Cars;