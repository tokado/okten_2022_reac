import React, {useEffect, useState} from 'react';

import {usersAxios} from "../service/users.service/user.axios.service";
import UserComponent from "../components/userComponent/UserComponent";

const Users = () => {
    let [users,setUsers] = useState([])
    let [user,setUser] = useState(null)
    const clickButton = (id) => {
        setUser(id)
    }
    useEffect(()=>{
        usersAxios()
            .then(value =>{
                setUsers(value.data)
            })
    },[])
    return (
        <div>
            {user && <div>{JSON.stringify(user)}</div>}
            <br/>
            {
                users.map(value => <UserComponent key={value.id} item={value} clickButton={clickButton}/>)
            }
        </div>
    );
};

export default Users;