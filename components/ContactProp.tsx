import React from 'react'
import {Contacts} from '../typings'
import Image from "next/legacy/image";

function ContactProp({name, src, active}: Contacts) {
    return (
        <div className={'flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-3 rounded-xl'}>
            <Image src={src} alt={name} width={40} height={40} layout={'fixed'} className={'rounded-full'}/>
            <p>{name}</p>

            {active && <div className={'absolute bottom-2 left-7 bg-green-500 h-3 w-3 rounded-full animate-pulse'}>
            </div> }

        </div>
    )
}

export default ContactProp
