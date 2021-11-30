import React, {useContext} from 'react';
import {DataContext} from "../index";

const DashboardHeader = ( ) => {
    const{isAdmin}= useContext(DataContext)
    return (
        <tr>
            <th> ID</th>
            <th> First Name</th>
            <th> Last Name</th>
            <th> User Name</th>
            <th> Email</th>
            <th> Gender</th>
            <th> Birthday</th>
            <th> Team</th>
            {isAdmin ?  <th> How Many Days Until My Birthday</th> : ""}
            {isAdmin ?  <th> Action</th> : ""}
        </tr>
    );
}

export default DashboardHeader;