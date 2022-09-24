import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function CommentDetails() {
    let {id} = useParams()
    let [comment,setComment] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments/' + id)
            .then(value => value.json())
            .then(value => setComment(value))
    },[])
    return(
        <div>
            <div>id:{comment.id}</div>
            <div>postid:{comment.postId}</div>
            <div>name:{comment.name}</div>
            <div>email:{comment.email}</div>
            <div>body:{comment.body}</div>
        </div>
    )
}