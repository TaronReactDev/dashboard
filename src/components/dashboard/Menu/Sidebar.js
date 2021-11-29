import React, {useContext} from 'react';
import Exit from "../../../icon/exit.png"
import {Context} from "../../../App";
import {Link} from 'react-router-dom'


const Sidebar = (props) => {

    const handleExit =()=>{
    localStorage.setItem("token", "")
        window.location.pathname = "/"
    }

    return (
        <div className="menuContainer">
        <ul className="menuUl_Container">
            {/*{item.map(el => <li className="menuItem">{el}</li>)}*/}
            <li onClick={e=>props.setDashboard("user")}>
                User List
            </li>
            <li onClick={e=>props.setDashboard("team")}>
                Team List
            </li>
        </ul>
            <img alt="exit" src={Exit} style={{width:"35px", height:"35px"}} onClick={handleExit}/>
        </div>
    );
}

export default Sidebar;