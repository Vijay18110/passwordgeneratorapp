import { useContext } from "react";
import { MdDelete, MdWidthFull } from "react-icons/md";
import { postlistcontext } from "../store/postlistcontext";

const Post = ({ post }) => {
    const { deletepost } = useContext(postlistcontext);

    return (
        <div class="card card-post" style={{ width: "30rem" }}  >
            <div class="card-body">
                <h5 class="card-title" >{post.title}</h5>
                <span onClick={() => { deletepost(post.id) }} class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    <MdDelete />
                    <span class="visually-hidden">unread messages</span>
                </span>


                <p class="card-text">
                    {post.body} </p>
                {
                    post.tags.map((tag) => <span class="badge text-bg-primary tags">{tag}</span>)
                }
                <div class="alert alert-success" role="alert">
                    {
                        ` ${post.reactions} people reacted on this post`
                    }
                </div>





            </div>
        </div>
    )
}
export default Post;