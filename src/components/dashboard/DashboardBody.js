import React from 'react';
import EditBtn from "./shared buttons/editBtn";
import DeleteBtn from "./shared buttons/deleteBtn";


const DashboardBody = ({ el, handleViewOrEdit, handleDelete}) => {

    const {Id, firstName, lastName, userName, email, gender, birthday, team} = el;


    return (
        <tr>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{Id}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{firstName}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{lastName}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{userName}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{email}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{gender}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{birthday}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{team}</td>





            <td className="uniqueQuestionItemBtn">
                <EditBtn text="edit" id={Id} handleViewOrEdit={handleViewOrEdit} type="edit"/>
                <DeleteBtn text="Del" handleDelete={handleDelete} id={Id}/>
            </td>
        </tr>
    );
}

export default DashboardBody;