import React, {useContext} from 'react';
import Logo from "../../../icon/dashboard.png"
import FemaleAvatar from "../../../icon/avatar.png"
import MaleAvatar from "../../../icon/man.png"
import "../style.scss"
import {DataContext} from "../index";

const Navbar = (props) => {
    const {userInfo, isAdmin} = useContext(DataContext)
     const name = isAdmin ? userInfo.filter(el =>  el.isAdmin ) : userInfo
    return (
        <div className="navbar">
            <img src={Logo} alt="logo"/>
            <div>
               <span > {isAdmin ? name[0].firstName +" "+ name[0].lastName : name.firstName +" "+ name.lastName} </span>

                {true ? <img src={MaleAvatar} alt="avatar"/> : <img src={FemaleAvatar} alt="avatar"/>  }

            </div>
        </div>
    );
}

export default Navbar;