import { useContext, useRef } from "react";
import { postlistcontext } from "../store/postlistcontext";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
    const navigate = useNavigate();
    const { addpost } = useContext(postlistcontext);
    const UserIdElement = useRef();
    const TitleElement = useRef();
    const bodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();
    const imageElement = useRef();
    const handleformsubmit = (event) => {
        event.preventDefault();
        const UserId = UserIdElement.current.value;
        const title = TitleElement.current.value;
        const body = bodyElement.current.value;
        const react = reactionsElement.current.value;
        const tags = tagsElement.current.value;
        const image = imageElement.current.value;

        UserIdElement.current.value = ""
        TitleElement.current.value = ""
        bodyElement.current.value = ""
        reactionsElement.current.value = ""
        tagsElement.current.value = ""
        imageElement.current.value = ""
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    title: title,
                    body: body,
                    react: react,
                    userId: UserId,
                    tags: tags,

                }
            )
        })
            .then(res => res.json())
            .then((post) => {
                console.log(post)
            }
            );
        addpost(UserId, title, body, react, tags, image)
        navigate("#")
    }
    return (

        <div>
            <div className="h1 text-center"> create post</div>
            <form className="Create_Post" onSubmit={handleformsubmit}>
                <div class="mb-3">
                    <label for="UserId" class="form-label">User Id</label>
                    <input type="text" ref={UserIdElement} class="form-control" placeholder="enter UserID" id="UserID" /*aria-describedby="emailHelp"*/ />
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label">post title</label>
                    <input type="text" ref={TitleElement} class="form-control" placeholder="title" id="title" />
                </div>
                <div class="mb-3">
                    <label for="body" class="form-label">content</label>
                    <textarea rows={3} ref={bodyElement} type="text" placeholder="about post" class="form-control" id="body" />
                </div>
                <div class="mb-3">
                    <label for="ractions" class="form-label">number of reactoins</label>
                    <input type="tel" ref={reactionsElement} class="form-control" placeholder="rections" id=" reaction" />
                </div>
                <div class="mb-3">
                    <label for="tags" class="form-label">number of reactoins</label>
                    <input type="tel" ref={tagsElement} class="form-control" placeholder="tags separated by space" id="tags" />
                </div>
                <div class="mb-3">
                    <label for="file" class="form-label"> your images</label>
                    <input type="file" ref={imageElement} class="form-control" placeholder="choose your images" id="file" />
                </div>


                <button type="submit" class="btn btn-primary"> POST</button>
            </form>
        </div>
    )
}
export default CreatePost;