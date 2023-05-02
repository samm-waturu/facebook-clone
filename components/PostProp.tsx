import React from 'react'
import {PostProp} from "../typings";

function PostProp({Icon, title} : PostProp) {
    return (
       <>
           <div className={'inputIcon rounded-none'}>
               {Icon && <Icon className={'h-6'} />}
               <p className={'text-xs sm:text-base'}>{title}</p>
           </div>

       </>
    )
}

export default PostProp
