import React from 'react';
import "./style.scss"


const Sidebar = ({menu}) => {



    return (
        <div className="sideBar">
        <ul >
            {
               menu.map(el => <li>{el}</li>)
            }

        </ul>
        </div>

    );
}

export default Sidebar;