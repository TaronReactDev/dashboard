import React, {useContext} from 'react';
import Exit from "./../../icon/exit.png"
import {Context} from "../../App";

const Sidebar = (props) => {

  const item = [ "item1", "item1" , "item1", "item1"]

    const {handleIsAuth, handleToken} = useContext(Context)
    const handleExit =()=>{
          handleIsAuth(false)
        handleToken(false)

    }

    return (
        <div className="menuContainer">
        <ul className="menuUl_Container">
            {item.map(el => <li className="menuItem">{el}</li>)}
        </ul>
            <img alt="exit" src={Exit} style={{width:"35px", height:"35px"}} onClick={handleExit}/>
        </div>
    );
}

export default Sidebar;