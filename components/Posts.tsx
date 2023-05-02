import React from 'react'
import {useCollection, useDocument} from "react-firebase-hooks/firestore";
import {initDb} from "../firebase.config";
import Post from "./Post";

function Posts({posts}: any) {
        const [fetchPosts] = useCollection(
            initDb.collection<any>('posts').orderBy('timestamp', 'desc')
        )

    return (

        <>
            {fetchPosts ? fetchPosts?.docs.map((post) =>
               ( <Post
                    key={post.id}
                    name={post.data().name}
                    email={post.data().email}
                    message={post.data().message}
                    timestamp={post.data().timestamp}
                    userImage={post.data().userImg}
                    postImage={post.data().postImg}

                />)
            ) : posts.map((post) => (
                <Post
                    key={post.id}
                    name={post.name}
                    email={post.email}
                    message={post.message}
                    timestamp={post.timestamp}
                    userImage={post.userImg}
                    postImage={post.postImg}

                />
            ))
            }
        </>
    )
}

export default Posts
