import React from 'react';
import Logo from "./../../icon/dashboard.png"
import FemaleAvatar from "./../../icon/avatar.png"
import MaleAvatar from "./../../icon/man.png"
import "./style.scss"

const Navbar = (props) => {
    return (
        <div className="navbar">

            <img src={Logo} alt="logo"/>


            <div>
               <span >Taron Sargsyan</span>
                {true ? <img src={MaleAvatar} alt="avatar"/> :
                    <img src={FemaleAvatar} alt="avatar"/>
                }
            </div>


        </div>
    );
}

export default Navbar;