import React from 'react';
import {useForm} from "react-hook-form";

import users from "../users/Users";
import User from "../user/User";

const UserForm = () => {

    const {register,handleSubmit} = useForm()

    const submit = (info) => {
        console.log(info)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <select {...register('info')} >
                    {
                        users.map(value => <User key={value.id} value={value.id}/>)
                    }
                </select>
                <button>get information</button>
            </form>
        </div>
    );
};

export default UserForm;