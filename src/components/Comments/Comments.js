import React, {useEffect, useState} from 'react';
import {service} from "../../service/axios.service";
import Comment from "../Comment/Comment";

const Comments = () => {
    let [comment,setComments] = useState([])
    useEffect(()=>{
        service.getAllСomments().then(value => setComments(value.data))
    },[])
    return (
        <div>
            <hr/>
            {
                comment.map(value => <Comment key={value.id} comment={value}/>)
            }
        </div>
    );
};

export default Comments;