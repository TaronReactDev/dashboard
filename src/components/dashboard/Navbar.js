import React from 'react';
import Logo from "./../../icon/dashboard.png"
import FmailAvatar from "./../../icon/avatar.png"
import MailAvatar from "./../../icon/man.png"
import "./style.scss"

const Navbar = (props) => {
    return (
        <div className="navbar">

            <img src={Logo}/>


            <div>
                <span>Taron Sargsyan</span>
                {true ? <img src={MailAvatar} alt="avatar"/> :
                    <img src={FmailAvatar} alt="avatar"/>
                }
            </div>


        </div>
    );
}

export default Navbar;