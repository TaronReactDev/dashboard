import React, {useState, useEffect, useContext} from 'react';
import {Button} from "@mui/material";
import DashboardHeader from "./DashboardHeader";
import DashboardBody from "./DashboardBody";
import Modal from "./Modal";
import ViewForModal from "./ViewForModal";
import AddNewUser from "./AddNewUser";
import EditForModal from "./EditForModal";
import axios from "axios";
import {DataContext} from "./index";


const Dashboard = (props) => {

    const {userInfo} = useContext(DataContext)
    console.log(userInfo)


    const [addingModalShow, setAddingModalShow] = useState(false)
    const [editModalShow, setEditModalShow] = useState(false)
    const [viewModalShow, setViewModalShow] = useState(false)

    const [editedUser, setEditedUser] = useState("")
    const [viewOneUser, setViewOneUser] = useState("")


    const handleViewOrEdit = (id, actionType) => () => {
        const filteredUser = userInfo.data.filter((el) => {
            return el.Id == id
        });

        switch (actionType) {
            case "edit" :
                console.log(filteredUser[0])
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
        console.log(id)
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
        <div className="dashboard">

            {userInfo.isAdmin ?    <Button variant="contained" onClick={handleAddNewUserModal}>
                +add new user
            </Button> : ""}


            <table className="dashboardtable">
                <DashboardHeader/>



                {userInfo.data.map(el => {
                    return <DashboardBody
                        key={el.Id}
                        el={el} handleDelete={() => handleDelete(el.Id)} handleViewOrEdit={handleViewOrEdit} isAdmin = {userInfo.isAdmin}/>
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

export default Dashboard;