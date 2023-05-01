import React from 'react'
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";
import {
    CalendarIcon,
    ClockIcon,
    ComputerDesktopIcon,
    UserIcon
} from "@heroicons/react/20/solid";

import {useSession} from "next-auth/react";

import SideProps from "./SideProps";

function Sidebar() {

    const {data: session} = useSession()

    return (
        <>

        <div className={'p-2 mt-5 max-w-[600px] xl:min-w-[258px]'}>

            <SideProps src={session?.user?.image} alt={session?.user?.name} title={session?.user?.name}/>
            <SideProps Icon={UserIcon} title={'Friends'} />
            <SideProps Icon={UserGroupIcon} title={'Groups'} />
            <SideProps Icon={ShoppingBagIcon} title={'Marketplace'} />
            <SideProps Icon={ComputerDesktopIcon} title={'Watch'} />
            <SideProps Icon={CalendarIcon} title={'Events'} />
            <SideProps Icon={ClockIcon} title={'Memories'} />
            <SideProps Icon={ChevronDownIcon} title={'See more'} />


        </div>

        </>
    )
}

export default Sidebar
