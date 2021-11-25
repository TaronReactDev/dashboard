import React, {useState, useEffect} from 'react';
import {Button} from "@mui/material";
import DashboardHeader from "./DashboardHeader";
import DashboardBody from "./DashboardBody";
import Modal from "./Modal";
import ViewForModal from "./ViewForModal";
import AddNewUser from "./AddNewUser";
import EditForModal from "./EditForModal";
import axios  from "axios";


const Dashboard = (props) => {

    const [userInfo, setUserInfo] = useState([{
        Id: 15,
        firstName: "taron",
        lastName: "sargsyan",
        username: "taron1993",
        email: "taron@gmail.com",
        birthday: "2021-11-12",
        gender: "male",
        team: "intern",

    },
        {
            Id: 25,
            firstName: "mane",
            lastName: "sargsyan",
            username: "mane200",
            email: "taron@gmail.com",
            birthday: "2010-01-12",
            gender: "female",
            team: "intern",

        }
    ])

    const [addingModalShow, setAddingModalShow] = useState(false)
    const [editModalShow, setEditModalShow] = useState(false)
    const [viewModalShow, setViewModalShow] = useState(false)

 //   const [editOrViewId, setEditOrViewId] = useState("")
    const [editedUser, setEditedUser] = useState("")
    const [viewOneUser, setViewOneUser] = useState("")

    useEffect(async ()=>{
        try {
            const data = await axios.get(`/api/user/login`)

            setUserInfo(data)

        } catch (e) {
            console.error(e)
        }

    },[])





    const handleViewOrEdit = (id, actionType) => () => {
        //setEditOrViewId(id);
        const filteredUser = userInfo.filter((el) => {
            return el.Id == id
        });

        switch (actionType) {
            case "edit" :
                setEditedUser(filteredUser[0]);
                setEditModalShow(true);
               // setViewModalShow(false);
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
    const handleDelete = () => {
    }

//**********   API    *********************************************




    return (
        <div className="dashboard">

            <Button variant="contained" onClick={handleAddNewUserModal}>
                +add new user
            </Button>


            <table className="dashboardtable">
                <DashboardHeader/>
                {userInfo.map(el => {
                    return <DashboardBody
                        key={el.Id}
                        el={el} handleDelete={handleDelete} handleViewOrEdit={handleViewOrEdit}/>
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