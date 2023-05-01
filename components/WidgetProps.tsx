import React from 'react'
import {WidgetProps} from "../typings";

function WidgetProps({Icon, name} : WidgetProps) {
    return (
       <>
           {Icon && <Icon className={'h-6'} />}


       </>
    )

}

export default WidgetProps
