import React from 'react'
import {SideProps} from "../typings";
import Image from "next/image";

function SideProps({Icon, title, src, alt}: SideProps) {
    return (
        <>
            <div className={'items-center space-x-2 p-4 '}>
                {src && (
                    <Image src={src} alt={alt || 'Image'} width={'60'}  height={'60'}
                                className={'h-10 w-10 xl:inline-flex bg-gray-100 rounded-full mb-0'}/>)}
                {Icon && (<Icon
                    className={'p-2 h-10 w-10 xl:inline-flex bg-gray-200 text-blue-500 cursor-pointer overflow-x transition duration-200 transform ease-in hover:scale-105 rounded-full'} />)}
                <h4 className={'hidden sm:inline-flex font-medium'}>{title}</h4>
            </div>
        </>
    )
}

export default SideProps
