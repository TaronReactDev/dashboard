import React, {useContext, useState} from 'react'
import TeamDashboardHeader from "./TeamDBHeader";
import TeamDashboardBody from "./TeamDashboardBody";
import {DataContext} from "../index";
import {Button} from "@mui/material";
import Modal from "../Modales/Modal";
import ViewTeamModal from "../Modales/TeamModal/ViewTeamModal";
import CreateNewTeam from "../Modales/TeamModal/CreateNewTeam";
import EditTeamModal from "../Modales/TeamModal/EditTeamModal";

function TeamDashboard (props){

    const {isAdmin, teamInfo} = useContext(DataContext)

    const [creatNewTeamModal, setCreatNewTeamModal] = useState(false)
    const [editModalShow, setEditModalShow] = useState(false)
    const [viewModalShow, setViewModalShow] = useState(false)

    const [editedTeam, setEditedTeam] = useState("")
    const [viewOneTeam, setViewOneTeam] = useState("")



    const handleViewOrEdit = (id, actionType) => () => {
        const filteredTeam = teamInfo.filter((el) => {

            return el.Id == id
        });

        switch (actionType) {
            case "edit" :
                setEditedTeam(filteredTeam[0]);
                setEditModalShow(true);
                break;
            case  "view":
                setViewOneTeam(filteredTeam[0]);
                setViewModalShow(true);
        }
    }


    const handleCreatNewTeamModal = () => {
        setCreatNewTeamModal(true)
    }




    const handleDelete = (id)  => {
        try {
            fetch("/api/admin/deleteTeam", {
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



    const handleCancelBtn = (type) => () => {
        switch (type) {
            case "creat" :
                setCreatNewTeamModal((prev) => !prev);
                break;
            case "edit" :
                setEditModalShow((prev) => !prev);
                break;
            case "view" :
                setViewModalShow((prev) => !prev);
                break;
        }
    }


    return(
        <div className="dashboard" style={{display: props.visible}}>


            {isAdmin ?    <Button variant="contained" onClick={handleCreatNewTeamModal}>
                +create new team
            </Button> : ""}

        <table className="dashboardtable">
            <TeamDashboardHeader isAdmin={isAdmin}/>



            {teamInfo.map(el =>{
                return <TeamDashboardBody
                    key={el.Id}
                    el={el}  handleDelete={() => handleDelete(el.Id)} handleViewOrEdit={handleViewOrEdit} isAdmin={isAdmin} />
            })}
        </table>

            <Modal modalShow={viewModalShow}>
                <div className="modalContainer">
                    <div className="modalContainer_background"
                         onClick={handleCancelBtn("view")}>
                    </div>
                    <ViewTeamModal viewOneTeam={viewOneTeam}/>
                </div>

            </Modal>

            <Modal modalShow={creatNewTeamModal}>
                <div className="modalContainer">
                    <div className="modalContainer_background"
                         onClick={handleCancelBtn("creat")}>
                    </div>
                    <CreateNewTeam handleCloseCreateingTeamModal={handleCancelBtn("creat")}/>
                </div>

            </Modal>


            <Modal modalShow={editModalShow}>
                <div className="modalContainer">
                    <div className="modalContainer_background"
                         onClick={handleCancelBtn("edit")}>
                    </div>
                    <EditTeamModal handleCloseEditingTeamModal={handleCancelBtn("edit")} editedTeam={editedTeam}/>
                </div>

            </Modal>
        </div>
    )

}

export default TeamDashboard





