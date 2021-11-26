import React, {useContext} from 'react';
import Logo from "./../../icon/dashboard.png"
import FemaleAvatar from "./../../icon/avatar.png"
import MaleAvatar from "./../../icon/man.png"
import "./style.scss"
import {DataContext} from "./index";

const Navbar = (props) => {
    const {userInfo} = useContext(DataContext)

     const name = userInfo.isAdmin ? userInfo.data.filter(el =>  el.isAdmin ) : userInfo.data
    return (
        <div className="navbar">
            <img src={Logo} alt="logo"/>
            <div>
               <span > {name[0].firstName +" "+ name[0].lastName} </span>

                {true ? <img src={MaleAvatar} alt="avatar"/> : <img src={FemaleAvatar} alt="avatar"/>  }

            </div>
        </div>
    );
}

export default Navbar;