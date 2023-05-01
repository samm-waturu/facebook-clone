import React from 'react'
import Stories from "./Stories";
import InputBox from "./InputBox";
import Posts from "./Posts";
import {PostsProps} from "../typings";

function Feed({posts}) {
    return (
        <>

            <div className={'flex-grow h-screen p-24 pt-6 mr-2 xl:mr-38 top-0 overflow-y-auto scrollbar-hide '}>

                <div className={'mx-auto max-w-md md:max-w-lg lg:max-w-2xl'}>
                    {/* Stories */}
                    <Stories/>
                    {/* Input Box */}
                    <InputBox />
                    {/*  Posts  */}
                    <Posts posts={posts} />
                </div>

            </div>

        </>
    )
}

export default Feed
