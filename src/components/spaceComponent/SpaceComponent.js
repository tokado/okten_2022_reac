import React from 'react';

import './SpaceComponent.style.css'

const SpaceComponent = ({item}) => {
    return (
        <div className={'main_space'}>
            <div>{item.flight_number}. {item.mission_name} - {item.launch_year}</div>
        </div>
    );
};

export default SpaceComponent;