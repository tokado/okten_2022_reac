import {Link, Route, Routes} from "react-router-dom";
import Todos from "./components/Todos/Todos";
import Albums from "./components/Albums/Albums";
import Comments from "./components/Comments/Comments";
import CommentDetails from "./components/CommentDetails/CommentDetails";


function App() {
    return (
        <div>

            <div><Link to={"/todos"}>Todos</Link></div>
            <div><Link to={"/albums"}>Albums</Link></div>
            <div><Link to={"/comments"}>Сomments</Link></div>

            <Routes>
                <Route path={'/todos'} element={<Todos/>}/>
                <Route path={'/albums'} element={<Albums/>}/>
                <Route path={'/comments'} element={<Comments/>}/>
                <Route path={'/comments/:id'} element={<CommentDetails/>}/>
            </Routes>

        </div>
    );
}

export default App;
