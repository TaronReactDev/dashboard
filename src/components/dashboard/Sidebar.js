import React from 'react';

const Sidebar = (props) => {

  const item = [ "item1", "item1" , "item1", "item1"]

    return (
        <ul className="menuContainer">
            {item.map(el => <li className="menuItem">{el}</li>)}

        </ul>
    );
}

export default Sidebar;