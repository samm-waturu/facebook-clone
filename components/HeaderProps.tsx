import React from 'react'
import {Props} from '../typings'

function HeaderProps({Icon, title, active, onClick}: Props) {
    return (
        <>
            <div className={'flex items-center md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-200'} >
            {Icon &&
                    <Icon className={`h-5 cursor-pointer hover:text-blue-500 text-center sm:h-6 mx-auto ${active && 'text-blue-500'}` }
                    />
            }


            </div>
        </>
    )
}

export default HeaderProps
