import React, {useContext} from 'react';
import Exit from "../../../icon/exit.png"
import {Context} from "../../../App";
import {Link} from 'react-router-dom'


const SidebarForUser = (props) => {

    const handleExit =()=>{
        localStorage.setItem("token", "")
        window.location.pathname = "/"
    }

    return (
        <div className="menuContainer">
            <ul className="menuUl_Container">
                {props.teamName}
            </ul>
            <img alt="exit" src={Exit} style={{width:"35px", height:"35px"}} onClick={handleExit}/>
        </div>
    );
}

export default SidebarForUser;