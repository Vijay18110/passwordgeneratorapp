import { useContext, useEffect, useState, } from "react"
import Post from "./Post"
import { postlistcontext } from "../store/postlistcontext";
import Message from "./welcommessage";
import Loader from "./Loadindspiner";
const PostList = () => {
    const { PostList, addinitialposts } = useContext(postlistcontext);
    const [fetching, setfetching] = useState(false);
    useEffect(() => {
        setfetching(true)
        fetch('https://dummyjson.com/posts'
            , {
                method: "get",
            }
        )
            .then(res => res.json())
            .then((obj) => {
                addinitialposts(obj.posts);
                setfetching(false);
            });
    }, []
    )
    return (
        <>
            {
                fetching && <Loader></Loader>
            }
            {
                !fetching && PostList.length === 0 && <Message></Message>
            }

            {
                !fetching && PostList.map((post) => <Post post={post}></Post>)
            }

        </>

    )
}
export default PostList