import React, {useContext} from 'react';
import Exit from "./../../icon/exit.png"
import {Context} from "../../App";
import {Redirect} from "react-router-dom";

const Sidebar = (props) => {
    const ProtectedContext = useContext(Context)
  const item = [ "item1", "item1" , "item1", "item1"]

    return (

        <div className="menuContainer">
        <ul className="menuUl_Container">
            {item.map(el => <li className="menuItem">{el}</li>)}

        </ul>

            <img alt="exit" src={Exit} style={{width:"35px", height:"35px"}} onClick={()=>{ProtectedContext.push("/"); localStorage.setItem("token", "")}}/>
        </div>
    );
}

export default Sidebar;