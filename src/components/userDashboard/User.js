import React from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar"
import Dashboard from "./Dashboard";

const User = (props) => {
    return (
        <div>
            <Navbar/>


            <div className="containerForDashboard">
                <Sidebar/>
                <Dashboard/>
            </div>

        </div>
    );
}

export default User;