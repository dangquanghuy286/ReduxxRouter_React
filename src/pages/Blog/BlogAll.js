import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BlogAll() {
    const [posts, setpost] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then(res => res.json())
            .then(data => {
                setpost(data.posts)
            })
    }, []
    )
    console.log(posts);

    return (
        <>
            <h1>Tin nóng</h1>
            <ul>
                {posts.map(item => (
                    <li key={item.id}>

                        <Link to={"/blog/" + item.id}>
                            {item.title}
                        </Link>

                    </li>

                ))}

            </ul>
        </>
    )
}
export default BlogAll;