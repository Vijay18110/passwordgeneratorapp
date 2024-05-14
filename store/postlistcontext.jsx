import { createContext, useReducer, useState } from "react";
export const postlistcontext = createContext({
    postlist: [],
    addpost: () => { },
    deletepost: () => { },
    addinitialposts: () => { },
});
const reducer = (currpostlist, action) => {
    let newpostlist = currpostlist;
    if (action.type === 'delete_post') {
        newpostlist = currpostlist.filter((post) => post.id !== action.payload.id)
    }
    else if (action.type === 'add_post') {
        newpostlist = [action.payload, ...currpostlist];
    }
    else if (action.type === 'add_initail_posts') {
        newpostlist = action.payload.posts;
    }
    return newpostlist;
}
const Handlecontextprovder = ({ children }) => {




    const addinitialposts = (posts) => {
        dispatchpostlist({
            type: "add_initail_posts",
            payload: {
                posts
            }
        })
    }
    const addpost = (UserId, title, body, react, tags, image) => {
        dispatchpostlist({
            type: "add_post",
            payload: {
                id: Date.now(),
                title: title,
                body: body,
                reactions: react,
                userId: UserId,
                tags: tags.split(" ")

            }
        })

    }
    const deletepost = (id) => {
        dispatchpostlist({
            type: 'delete_post',
            payload: {
                id
            }
        })
    }

    const [PostList, dispatchpostlist] = useReducer(reducer, []);

    return (
        <postlistcontext.Provider value={{
            PostList,
            deletepost,
            addpost,
            addinitialposts,
        }}>
            {children}
        </postlistcontext.Provider>
    )
}
// const DEFAULT_POSTLIST = [{
//     id: 1,
//     title: "Going to mumbai",
//     body: " hello friends i am going to mumbai",
//     react: 1,
//     userId: "nivya raj",
//     tags: ["like", "comments", "send"],

// },
// {
//     id: 2,
//     title: "Going to manali",
//     body: " hello friends i am going to manali",
//     react: 15,
//     userId: "vijayraj",
//     tags: ["like", "comments", "send"],

// }];
export default Handlecontextprovder;


