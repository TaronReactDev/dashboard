import React, {useContext} from 'react';




const DashboardBody = ({ el, handleViewOrEdit}) => {



    const {Id, firstName, lastName, username, email, gender, dateOfBirth} = el;

    return (
        <tr >

            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{Id}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{firstName}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{lastName}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{username}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{email}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{gender}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{dateOfBirth}</td>
        </tr>

    );
}

export default DashboardBody;