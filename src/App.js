import './App.css';
import {useEffect, useState} from "react";
import Users from "./components/users";
import Posts from "./components/posts";
import Comments from "./components/comments";

function App() {


    return (
        <div>
            <Users/>
            <Posts/>
            <Comments/>
        </div>
    );
}
export default App;
