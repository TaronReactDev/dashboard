import React from 'react';

const DashboardHeader = (props) => {
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
            <th> Action</th>
        </tr>
    );
}

export default DashboardHeader;