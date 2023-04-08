import React from 'react';
import './SideBar.css';

function SideBar({children}){
    return(
        <div className={"sidebar"}>
            {children}
            <footer id={"footer"}>
            </footer>
        </div>
    )
}

export default SideBar;