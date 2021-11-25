import React from 'react';


const DashboardBody = ({ el, handleView, handleDelete}) => {

    const {Id, firstName, lastName, username, email, gender, birthday, team} = el;


    return (
        <tr onClick={handleView(Id)}>
            <td className="uniqueQuestionItem" >{Id}</td>
            <td className="uniqueQuestionItem" >{firstName}</td>
            <td className="uniqueQuestionItem" >{lastName}</td>
            <td className="uniqueQuestionItem" >{username}</td>
            <td className="uniqueQuestionItem" >{email}</td>
            <td className="uniqueQuestionItem" >{gender}</td>
            <td className="uniqueQuestionItem" >{birthday}</td>
            <td className="uniqueQuestionItem" >{team}</td>

        </tr>
    );
}

export default DashboardBody;