import React, {useReducer, useRef} from 'react';

import CatComponent from "../CatComponent/CatComponent";
import './style.css';
import DogComponent from "../DogComponent/DogComponent";

const reducer = (state,action) => {
    const {type,payload} = action;
switch (action.type) {
    case 'addCat':
        return {...state,cats:[...state.cats,{name:payload, id: Date.now()}]}
    case 'deleteCat':
        return {...state.cats,cats: state.cats.filter(cat=> cat.id !== payload)};
    case 'addDog':
        return {...state,dogs:[...state.dogs,{name:payload, id: Date.now()}]}
    case 'deleteDog':
        return {...state.dogs,dogs: state.dogs.filter(dog=> dog.id !== payload)};
    default:
        return state;
}
return {...state}
}

const MainReducer = () => {
   let [state,dispatch] = useReducer(reducer, {cats: [],dogs:[]})

    const refCat = useRef();
    const refDog = useRef();

    const createCat = () => {
        dispatch({type: 'addCat',payload: refCat.current.value})
        refCat.current.value = '';
    }
    const createDog = () => {
        dispatch({type: 'addDog',payload: refDog.current.value})
        refCat.current.value = '';
    }
    return (
        <div className={'main'}>
            <div className={'cat'}>
                <label> Add cat: <input type={'text'} ref={refCat} />
                    <button onClick={createCat}>+</button>
                </label>
                {
                    state.cats.map(cat => <CatComponent key={cat.id} cat={cat} dispatch={dispatch} />)
                }
            </div>
            <div className={'dog'}>
                <label> Add dog: <input type={'text'} ref={refDog} />
                    <button onClick={createDog}>+</button>
                </label>
                {
                    state.dogs.map(dog => <DogComponent key={dog.id} dog={dog} dispatch={dispatch} />)
                }
            </div>




        </div>
    );
};

export default MainReducer;