import React, {useContext} from 'react';
import {DataContext} from "../index";
import EditBtn from "../shared buttons/editBtn";
import DeleteBtn from "../shared buttons/deleteBtn";


const TeamDashboardBody = ({el}) => {

const {handleViewOrEdit, isAdmin, handleDelete } =useContext(DataContext)

    const {Id,
        name,
        countOfMembers,
        maxCountOfMembers} = el;

    return (
        <tr >

            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view", "teamModal")} >{Id}</td>
            <td className="uniqueQuestionItem"  onClick={handleViewOrEdit(Id, "view", "teamModal")}>{name}</td>
            <td className="uniqueQuestionItem"  onClick={handleViewOrEdit(Id, "view", "teamModal")}>{countOfMembers}</td>
            <td className="uniqueQuestionItem"  onClick={handleViewOrEdit(Id, "view", "teamModal")}>{maxCountOfMembers}</td>

            {isAdmin ? <td className="uniqueQuestionItemBtn">
                <EditBtn text="edit"  handleViewOrEdit={handleViewOrEdit(Id, "edit", "teamModal")} />
                <DeleteBtn text="Del" handleDelete={handleDelete(Id, "/api/admin/deleteTeam")}/>
            </td> : ""}


        </tr>

    );
}

export default TeamDashboardBody;