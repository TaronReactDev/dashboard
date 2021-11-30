import React, {useContext} from 'react'
import {DataContext} from "../index";

const TeamDashboardHeader = () => {
    const{isAdmin}= useContext(DataContext)

    return(
        <tr>
            <th> Id </th>
            <th> Name </th>
            <th> Count of members </th>
            <th> Max count </th>
            {isAdmin ?  <th> Action</th> : ""}
        </tr>
    )
}

export default TeamDashboardHeader