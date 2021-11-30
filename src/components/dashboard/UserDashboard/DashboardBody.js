import React, {useContext} from 'react';
import EditBtn from "../shared buttons/editBtn";
import DeleteBtn from "../shared buttons/deleteBtn";
import {DataContext} from "../index";
import Crown from "../../../icon/crown.png"

const DashboardBody = ({el}) => {

    const {handleViewOrEdit, isAdmin, handleDelete} = useContext(DataContext)

    const {Id, firstName, lastName, username, email, gender, dateOfBirth, team} = el;

    let date = new Date();
    let dateMonth = date.getMonth() + 1;
    let dateDay = date.getDate();
    let dateOfBirthArray = dateOfBirth.split("-");

    return (
        <tr>

            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{Id}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>

                { dateOfBirthArray[1] > dateMonth && dateOfBirthArray[1] - dateMonth <= 1 && dateDay - dateOfBirthArray[2] <= 30 ? < img alt="Crown" src={Crown}
                                                                                                                                         style={{width:"15px", marginRight:"10px"}} />  : ""}
                {firstName}
            </td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{lastName}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{username}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{email}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{gender}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{dateOfBirth}</td>
            <td className="uniqueQuestionItem" onClick={handleViewOrEdit(Id, "view")}>{team}</td>



            {
                isAdmin ? <td className="uniqueQuestionItemBtn">
                    <EditBtn text="edit" handleViewOrEdit={handleViewOrEdit(Id, "edit")}/>
                    <DeleteBtn text="Del" handleDelete={handleDelete(Id, "/api/admin/delete")}/>
                </td> : ""
            }

        </tr>

    );
}

export default DashboardBody;