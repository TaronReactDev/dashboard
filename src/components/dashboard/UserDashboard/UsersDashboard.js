import React, {useState, useEffect, useContext} from 'react';
import {Button} from "@mui/material";
import DashboardHeader from "./DashboardHeader";
import DashboardBody from "./DashboardBody";
import Modal from "../Modales/Modal";
import ViewForModal from "../Modales/UserModal/ViewForModal";
import AddNewUser from "../Modales/UserModal/AddNewUser";
import EditForModal from "../Modales/UserModal/EditForModal";
import {DataContext} from "../index";


const UsersDashboard = (props) => {

    const {
        userInfo,
        isAdmin,
        handleAddNewUserModal,
        viewModalShow,
        handleCancelBtn,
        addingModalShow,
        editModalShow,
        editedUser} = useContext(DataContext)

    return (
        <div className="dashboard" style={{display: props.visible}}>

            {isAdmin ?    <Button variant="contained" onClick={handleAddNewUserModal}>
                +add new user
            </Button> : ""}

            <table className="dashboardtable">
                <DashboardHeader />

                {userInfo.map(el => {
                    return <DashboardBody
                        key={el.Id}
                        el={el}  />
                })}
            </table>

            <Modal modalShow={viewModalShow}>
                <div className="modalContainer">
                    <div className="modalContainer_background"
                         onClick={()=>handleCancelBtn("view")}>
                    </div>
                    <ViewForModal />
                </div>
            </Modal>

            <Modal modalShow={addingModalShow}>
                <div className="modalContainer">
                    <div className="modalContainer_background"
                         onClick={()=>handleCancelBtn("adding")}>
                    </div>
                    <AddNewUser />
                </div>
            </Modal>

            <Modal modalShow={editModalShow}>
                <div className="modalContainer">
                    <div className="modalContainer_background"
                         onClick={()=>handleCancelBtn("edit")}>
                    </div>
                    <EditForModal  editedUser={editedUser}/>
                </div>
            </Modal>

        </div>
    );
}

export default UsersDashboard;