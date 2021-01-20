import React from 'react'
import './SidebarOptions.css'
import { Button } from '@material-ui/core'
const SidebarOptions = ({Icon,title,number,selected}) => {
    return (
        <div className={`sidebarOption ${selected&&"sidebar--active"}`}>
            <Icon />
            <h3 className="option_title">{title}</h3>
            <p className="number">{number}</p>
            
        </div>
    )
}

export default SidebarOptions
