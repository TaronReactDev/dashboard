import React, {useState, useEffect, useContext} from 'react';
import {Button} from "@mui/material";
import DashboardHeader from "./DashboardHeader";
import DashboardBody from "./DashboardBody";
import Modal from "../Modales/Modal";
import ViewForModal from "../Modales/ModalUser/ViewForModal";
import AddNewUser from "../Modales/ModalUser/AddNewUser";
import EditForModal from "../Modales/ModalUser/EditForModal";
import axios from "axios";
import {DataContext} from "../index";
import {Route, Switch, Link} from 'react-router-dom'


const UsersDashboard = (props) => {

    const {userInfo, isAdmin} = useContext(DataContext)


    const [addingModalShow, setAddingModalShow] = useState(false)
    const [editModalShow, setEditModalShow] = useState(false)
    const [viewModalShow, setViewModalShow] = useState(false)

    const [editedUser, setEditedUser] = useState("")
    const [viewOneUser, setViewOneUser] = useState("")


    const handleViewOrEdit = (id, actionType) => () => {
        const filteredUser = userInfo.filter((el) => {
            return el.Id == id
        });

        switch (actionType) {
            case "edit" :
                setEditedUser(filteredUser[0]);
                setEditModalShow(true);
                break;
            case  "view":
                setViewOneUser(filteredUser[0]);
                setViewModalShow(true);
        }
    }


    const handleAddNewUserModal = () => {
        setAddingModalShow(true)
    }


    const handleCancelBtn = (type) => () => {
        console.log(type)
        switch (type) {
            case "adding" :
                setAddingModalShow((prev) => !prev);
                break;
            case "edit" :
                setEditModalShow((prev) => !prev);
                break;
            case "view" :
                setViewModalShow((prev) => !prev);
                break;
        }
    }

//**********   API    *********************************************
    const handleDelete = (id)  => {
        try {
            fetch("/api/admin/delete", {
                method: 'PUT', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify({Id: id})
            })
        } catch (e) {
            console.log(e)
        }
    }

//**********   API    *********************************************


    // const asd =  userInfo.isAdmin ? userInfo.data : [userInfo.teamIfo]


    return (
        <div className="dashboard" style={{display: props.visible}}>

            {isAdmin ?    <Button variant="contained" onClick={handleAddNewUserModal}>
                +add new user
            </Button> : ""}


            <table className="dashboardtable">
                <DashboardHeader isAdmin = {isAdmin}/>



                {userInfo.map(el => {
                    return <DashboardBody
                        key={el.Id}
                        el={el} handleDelete={() => handleDelete(el.Id)} handleViewOrEdit={handleViewOrEdit} isAdmin = {isAdmin}/>
                })}
            </table>


            <Modal modalShow={viewModalShow}>
                <div className="modalContainer">
                    <div className="modalContainer_background"
                         onClick={handleCancelBtn("view")}>
                    </div>
                    <ViewForModal viewOneUser={viewOneUser}/>
                </div>

            </Modal>

            <Modal modalShow={addingModalShow}>
                <div className="modalContainer">
                    <div className="modalContainer_background"
                         onClick={handleCancelBtn("adding")}>
                    </div>
                    <AddNewUser handleCloseAddingNewUserModal={handleCancelBtn("adding")}/>
                </div>

            </Modal>


            <Modal modalShow={editModalShow}>
                <div className="modalContainer">
                    <div className="modalContainer_background"
                         onClick={handleCancelBtn("edit")}>
                    </div>
                    <EditForModal handleCloseEditingUserModal={handleCancelBtn("edit")} editedUser={editedUser}/>
                </div>

            </Modal>

        </div>
    );
}

export default UsersDashboard;