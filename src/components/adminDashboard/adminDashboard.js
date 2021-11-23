import React from 'react';
import Sidebar from "./sidebar";
import NavBar from "./navBar";
import DashboardTable from "./dashboardTable/index";
import "./style.scss"


const AdminDashboard = (props) => {

    const menu = ["item 1", "item 2", "item 3", "item 4"]

    return (
        <div className="adminDashboardContainer">


                <NavBar/>
            <DashboardTable/>


            <Sidebar menu={menu}/>
        </div>
    );
}

export default AdminDashboard;