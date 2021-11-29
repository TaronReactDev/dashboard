import React, {useContext} from 'react';
import {DataContext} from "../index";
import EditBtn from "../shared buttons/editBtn";
import DeleteBtn from "../shared buttons/deleteBtn";


const TeamDashboardBody = ({ el,handleViewOrEdit, handleDelete, isAdmin}) => {



    const {Id, name,
        countOfMembers,
        maxCountOfMembers} = el;

    return (
        <tr >

            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")} >{Id}</td>
            <td className="uniqueQuestionItem"  onClick={handleViewOrEdit(Id, "view")}>{name}</td>
            <td className="uniqueQuestionItem"  onClick={handleViewOrEdit(Id, "view")}>{countOfMembers}</td>
            <td className="uniqueQuestionItem"  onClick={handleViewOrEdit(Id, "view")}>{maxCountOfMembers}</td>

            {isAdmin ? <td className="uniqueQuestionItemBtn">
                <EditBtn text="edit" id={Id} handleViewOrEdit={handleViewOrEdit} type="edit"/>
                <DeleteBtn text="Del" handleDelete={handleDelete} id={Id}/>
            </td> : ""}


        </tr>

    );
}

export default TeamDashboardBody;