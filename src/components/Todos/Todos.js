import {useEffect, useState} from "react";
import {service} from "../../service/axios.service";
import Todo from "../Todo/Todo";

export default function Todos() {
    let [todos, setTodos] = useState([])
    useEffect(() => {
        service.getAllTodos().then(value => {
            setTodos(value.data)
        })
    }, [])
    return (
        <div>
            {
                todos.map(value => <Todo
                    key={value.id}
                    todos={value}
                />)
            }
        </div>
    )
}