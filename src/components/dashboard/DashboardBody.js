import React, {useContext} from 'react';
import EditBtn from "./shared buttons/editBtn";
import DeleteBtn from "./shared buttons/deleteBtn";
import {DataContext} from "./index";


const DashboardBody = ({ el, handleViewOrEdit, handleDelete, isAdmin}) => {



    const {Id, firstName, lastName, username, email, gender, dateOfBirth, team} = el;

    return (
        <tr >

            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{Id}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{firstName}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{lastName}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{username}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{email}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{gender}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{dateOfBirth}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{team}</td>

            {
                isAdmin ?   <td className="uniqueQuestionItemBtn" >
                    <EditBtn text="edit" id={Id} handleViewOrEdit={handleViewOrEdit} type="edit"/>
                    <DeleteBtn text="Del" handleDelete={handleDelete} id={Id}/>
                </td> :""
            }

        </tr>

    );
}

export default DashboardBody;