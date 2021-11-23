import React from 'react';
import DeleteBtn from "./shared buttons/deleteBtn";
import EditBtn from "./shared buttons/editBtn";
import CancelBtn from "./shared buttons/cancelBtn";

function DashboardTable(props) {
    return (
        <tr>
            <td className="uniqueQuestionItem" ></td>
            <td className="uniqueQuestionItem" ></td>
            <td className="uniqueQuestionItem" ></td>
            <td className="uniqueQuestionItem" ></td>

            <td>    <EditBtn text="edit" type="edit"/>
                <DeleteBtn text="Del" />
            </td>
        </tr>
    );
}

export default DashboardTable;