import { useEffect, useState } from "react";
import '../css/Post.css'
import Post from "./Post";

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    return(
        <div className="post">
            <Post posts={posts} />
        </div>
    )
}

export default Posts;
