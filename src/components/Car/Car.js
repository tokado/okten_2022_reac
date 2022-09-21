import React from 'react';

const Car = ({item}) => {
    const {id,model,price,year} = item;
    return (
        <div>
            <div>id:{id}</div>
            <div>model:{model}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <div><br/></div>
        </div>
    );
};

export default Car;