import React from 'react'

const TeamDashboardHeader = ({isAdmin}) => {
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