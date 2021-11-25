import React from 'react';
import Exit from "./../../icon/exit.png"

const Sidebar = (props) => {

  const item = [ "item1", "item1" , "item1", "item1"]

    return (

        <div className="menuContainer">
        <ul className="menuUl_Container">
            {item.map(el => <li className="menuItem">{el}</li>)}

        </ul>

            <img alt="exit" src={Exit} style={{width:"35px", height:"35px"}}/>
        </div>
    );
}

export default Sidebar;