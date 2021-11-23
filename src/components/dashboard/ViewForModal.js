import React from 'react';


const ViewForModal = ({viewOneUser}) => {
    return (


        <div className="formContainer">

            <div className="modalItemContainer">
                <span>Id </span>
                <span>{viewOneUser.Id}</span>
            </div>


            <div className="modalItemContainer">
                <span>firstName </span>
                <span>{viewOneUser.firstName}</span>
            </div>


            <div className="modalItemContainer">
                <span>lastName </span>
                <span>{viewOneUser.lastName}</span>
            </div>


            <div className="modalItemContainer">
                <span>userName </span>
                <span>{viewOneUser.userName}</span>
            </div>


            <div className="modalItemContainer">
                <span>email </span>
                <span>{viewOneUser.email}</span>
            </div>

            <div className="modalItemContainer">
                <span>birthday </span>
                <span>{viewOneUser.birthday}</span>
            </div>

            <div className="modalItemContainer">
                <span>gender </span>
                <span>{viewOneUser.gender}</span>
            </div>

            <div className="modalItemContainer">
                <span>team </span>
                <span>{viewOneUser.team}</span>
            </div>
        </div>
    );
}

export default ViewForModal;