import React from 'react';

import {useForm} from "react-hook-form";
import {CarsService} from "../../service/cars.service";



const CarForm = ({setCars}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {register,handleSubmit,reset,formState:{errors,isValid}} = useForm({ mode:'all'})

    const createNewCar = (car) => {
        CarsService.create(car).then(({data}) => setCars(value =>[...value,data]))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(createNewCar)}>
                <input type='text'{...register('model')}/>
                <input type='number'{...register('price')}/>
                <input type='number'{...register('year')}/>
                <button>send</button>
            </form>
        </div>
    );
};

export default CarForm;