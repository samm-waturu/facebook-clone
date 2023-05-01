import React from 'react'
import CardProps from '../typings'
import Image from "next/legacy/image";


export default function Cards({ name, src, profile}: CardProps) {
    return (
        <>
        <div className={'relative h-14 w-14 md: h-20 w-20 lg:h-56 w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105'}>
            <Image src={profile} alt={name} width={'40'} height={'40'} layout={'fixed'} objectFit={'cover'}
                   className={'absolute opacity-0 lg:opacity-100 rounded-full z-40 top-10'} />

            <Image src={src} alt={name} layout={'fill'}
                   className={'object-cover filter brightness-75 h-60 rounded-full lg:rounded-3xl'}  />
            <p className={'text-xs text-white bottom-2 absolute p-1 '}>{name}</p>
        </div>

        </>
    )
}
