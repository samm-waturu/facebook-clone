import React from 'react'
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {EllipsisHorizontalIcon, VideoCameraIcon} from "@heroicons/react/24/solid"
import WidgetProps from "./WidgetProps";
import ContactProp from "./ContactProp";

const Contacts = [
    {
        src: 'https://cdna.artstation.com/p/assets/images/images/007/039/558/large/ahmed-karam-img-20170820-163241-205.jpg?1503239784',
        name: 'Jeff Bezos',
        active: true
    },
    {
        src: 'https://links.papareact.com/kxk',
        name: 'Elon Musk',
        active: false
    },
    {
        src: 'https://links.papareact.com/zvy',
        name: 'Bill Gates',
        active: false
    },
    {
        src: 'https://links.papareact.com/snf',
        name: 'Mark Zuckerberg',
        active: true
    },
    {
        src: 'https://links.papareact.com/6gg',
        name: 'The Queen',
        active: true
    },
    {
        src: 'https://links.papareact.com/r57',
        name: 'James Bond',
        active: false
    },
]

function Widgets() {
    return (
        <div className={'hidden lg:flex flex-col w-60 p-2 mt-5 mr-3'}>

            <div className={'flex justify-between items-center text-gray-500 mb-5'}>
                <h2 className={'text-xl'}>
                    Contacts
                </h2>
                <div className={'flex space-x-2'}>
                    <WidgetProps Icon={VideoCameraIcon}/>
                    <WidgetProps Icon={MagnifyingGlassIcon}/>
                    <WidgetProps Icon={EllipsisHorizontalIcon}/>
                </div>
            </div>

            {Contacts.map((Contact) => (
                <ContactProp src={Contact.src} name={Contact.name} key={Contact.name} active={Contact.active}></ContactProp>
            ))}
        </div>
    )
}

export default Widgets
