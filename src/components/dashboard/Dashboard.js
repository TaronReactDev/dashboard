import React, {useState} from 'react';
import {Button} from "@mui/material";
import DashboardHeader from "./DashboardHeader";
import DashboardBody from "./DashboardBody";
import Modal from "./Modal";
import ViewForModal from "./ViewForModal";
import AddNewUser from "./AddNewUser";

const Dashboard = (props) => {

    const [userInfo, setUserInfo] = useState([{
        Id: 15,
        firstName: 15,
        lastName: 15,
        userName: 15,
        email: 15,
        birthday: 15,
        gender: 15,
        team: 15,

    },
        {
            Id: 125,
            firstName: 152,
            lastName: 152,
            userName: 155,
            email: 15,
            birthday: 1455,
            gender: 14525,
            team: 15,
        }
    ])

    const [addingModalShow, setAddingModalShow] = useState(false)
    const [editModalShow, setEditModalShow] = useState(false)
    const [viewModalShow, setViewModalShow] = useState(false)

    const [editOrViewId, setEditOrViewId] = useState("");
    const [editedUser, setEditedUser] = useState()
    const [viewOneUser, setViewOneUser] = useState()


    const handleViewOrEdit = (id, actionType) => () => {
        setEditOrViewId(id);
        const filteredUser = userInfo.filter((el) => {
            return el.Id == id
        });

        switch (actionType) {
            case "edit" :
                setEditedUser(filteredUser[0]);
                setEditModalShow(true);
                setViewModalShow(false);
                break;
            case  "view":
                setViewOneUser(filteredUser[0]);
                setViewModalShow(true);
        }
    }


    const handleAddNewUserModal = ()=>{
        setAddingModalShow(true)
    }



    const handleCancelBtn = (type) => () => {
        switch (type) {
            case "adding" :
                setAddingModalShow((prev) => !prev);
               // clearState();
                break;
            // case "edit" :
            //     setEditModalShow((prev) => !prev);
            //     clearState();
            //     break;
            case "view" :
                setViewModalShow((prev) => !prev);
                // clearState();
                break;
        }
    }
    console.log(addingModalShow)


    const handleDelete = () => {
    }


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
                         onClick={handleCancelBtn("view")}                    >
                    </div>
                    <ViewForModal viewOneUser={viewOneUser}/>
                </div>

            </Modal>

  <Modal modalShow={addingModalShow}>
                <div className="modalContainer">
                    <div className="modalContainer_background"
                         onClick={handleCancelBtn("adding")}                    >
                    </div>
                    <AddNewUser handleCloseAddingNewUserModal={handleCancelBtn("adding")}/>
                </div>

            </Modal>


        </div>
    );
}

export default Dashboard;