import React, {useEffect, useState} from 'react';

import UserForm from "../userForm/UserForm";

const Users = () => {
   const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(value => value.json())
            .then(value => {
                setUsers(value)
                console.log(value)
            })
    },[])
    return (
        <div>
            <UserForm users={users} />
        </div>
    );
};

export default Users;
