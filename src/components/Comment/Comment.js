import {Link} from "react-router-dom";

export default function Comment({comment}) {
    return(
        <div>
            <Link to={`${comment.id}`} state={{...comment}}>{comment.name}</Link>
        </div>
    )
}