import React from 'react'
import Image from "next/image";
import {useSession, signIn, signOut} from "next-auth/react"
import {
    BellIcon,
    ChatBubbleBottomCenterIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ArrowRightOnRectangleIcon,
    ArrowLeftOnRectangleIcon,
    ViewColumnsIcon
} from "@heroicons/react/20/solid";

import {
    FlagIcon,
    PlayIcon,
    MagnifyingGlassIcon,
    ShoppingCartIcon
} from "@heroicons/react/24/outline";
import HeaderProps from "./HeaderProps";

function Header() {

    const {data: session} = useSession()

    return (
        <div className={'sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'}>
            {/* left   */}
            <div className={'flex items-center '}>
                <Image src={'https://links.papareact.com/5me'} alt={'Facebook logo'} width={'40'} height={'40'}/>
                <div className={'flex items-center rounded-full bg-gray-100 p-2 ml-2'}>
                    <MagnifyingGlassIcon className={'h-6 text-gray-600'}/>
                    <input
                        className={' md:inline-flex flex ml-2 items-center bg-transparent outline-none flex-shrink'}
                        type="text" placeholder={'Search Facebook'}/>
                </div>

            </div>

            {/*  center  */}
            <div className={'hidden md:flex justify-center flex-grow'}>
                <div className={'flex space-x-6 md: space-x-2'}>
                    {/* Header component props */}

                    {session ? (
                        <>
                            <HeaderProps Icon={HomeIcon} active={true} />
                            <HeaderProps Icon={UserGroupIcon} />
                            <HeaderProps Icon={PlayIcon} />

                        </>


                            )
                        : null
                    }

                </div>
            </div>

            {/*  right  */}

            <div className={'hidden md:flex items-center space-x-2 justify-end'}>

                {/*  Instead of creating a new component
                 prop We are utilising reusable
                  tailwind utilities */}

                {session ? (
                    <>
                    <ViewColumnsIcon className={'icon'}/>
                    <ChatBubbleBottomCenterIcon className={'icon'}/>
                    <BellIcon className={'icon'}/>
                    <Image src={session?.user?.image}  alt={session?.user?.name}
                           width={'40'} height={'40'} className={'icon'} />
                    </>
                ) : null}
                <div className={'pl-4'}>
                    {session ? (
                        <ArrowLeftOnRectangleIcon className={'icon'} onClick={() => signOut()}/>

                    ) : (
                        <ArrowRightOnRectangleIcon className={'icon'} onClick={() => signIn()}/>
                    )
                    }
                </div>

            </div>

        </div>
    )
}

export default Header
