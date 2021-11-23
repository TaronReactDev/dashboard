import React from 'react';
import "./style.scss"
import Logo from "./icon/layout.png"
import MailAvatar from "./icon/man.png"
import FmailAvatar from "./icon/avatar.png"


const NavBar = (props) => {
    return (
        <div className="navBar">
            <img src={Logo} alt="logo" className="logo"/>

            <div className="userAvatarContainer">
                <span> Taron Sargsyan </span>

                {true ? <img src={MailAvatar} alt="mailAvatar" className="avatar"/>
                    : <img src={FmailAvatar} alt="fmailAvatar" className="avatar"/>}
            </div>
        </div>
    );
}

export default NavBar;