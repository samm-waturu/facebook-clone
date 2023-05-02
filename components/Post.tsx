import React from 'react'
import Image from 'next/legacy/image'
import {PostsProps} from '../typings'
import PostProp from "./PostProp";
import {HandThumbUpIcon, ChatBubbleLeftEllipsisIcon, ShareIcon} from "@heroicons/react/24/outline";

function Post({name, message, userImage, postImage, timestamp}: PostsProps | null) {
    return (
        <>

            <div className={'flex flex-col'}>
                <div className={'p-5 bg-white mt-5 rounded-t-2xl shadow-sm'}>
                    <div className={'flex items-center space-x-2'}>
                        <Image className={'rounded-full '} src={userImage} width={40}
                               height={40} alt={name}/>
                        <div>
                            <p className={'font-medium '}>
                                {name}
                            </p>

                            {timestamp ? ( <p className={'text-xs text-gray-400'}>
                                {new Date(timestamp?.toDate()).toLocaleDateString()}
                            </p>): (
                                <p className={'text-xs text-gray-400 animate-pulse'}> loading </p>
                            ) }

                        </div>

                    </div>
                    <hr className={'mt-4'}/>
                    <p className={'pt-4 font-medium text-xs'}>
                        {message}
                    </p>

                    {/*Image section*/}

                    {postImage && (
                        <div className={'relative h-56 md:h-95 bg-white mt-4'}>
                            <Image src={postImage} objectFit={'cover'} layout={'fill'}/>
                        </div>
                    )}

                    <div className={'flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-l'}>

                        <PostProp title={'Like'} Icon={HandThumbUpIcon}/>
                        <PostProp title={'Like'} Icon={ChatBubbleLeftEllipsisIcon}/>
                        <PostProp title={'Like'} Icon={ShareIcon}/>

                    </div>
                </div>

                {/*  Post footer */}


            </div>

        </>
    )
}

export default Post
