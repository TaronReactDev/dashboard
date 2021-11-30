import React, {useContext, useState} from 'react'
import TeamDashboardHeader from "./TeamDBHeader";
import TeamDashboardBody from "./TeamDashboardBody";
import {DataContext} from "../index";
import {Button} from "@mui/material";
import Modal from "../Modales/Modal";
import ViewTeamModal from "../Modales/TeamModal/ViewTeamModal";
import CreateNewTeam from "../Modales/TeamModal/CreateNewTeam";
import EditTeamModal from "../Modales/TeamModal/EditTeamModal";

function TeamDashboard(props) {

    const {
        isAdmin,
        teamInfo,
        viewModalShow,
        handleCancelBtn,
        editModalShow,
        handleCreatNewTeamModal,
        creatNewTeamModal,
    } = useContext(DataContext)


    return (
        <div className="dashboard" style={{display: props.visible}}>


            {isAdmin ? <Button variant="contained" onClick={handleCreatNewTeamModal}>
                +create new team
            </Button> : ""}

            <table className="dashboardtable">
                <TeamDashboardHeader />


                {teamInfo.map(el => {
                    return <TeamDashboardBody key={el.Id} el={el}/>
                })}
            </table>

            <Modal modalShow={viewModalShow}>
                <div className="modalContainer">
                    <div className="modalContainer_background"
                         onClick={()=>handleCancelBtn("view")}>
                    </div>
                    <ViewTeamModal/>
                </div>

            </Modal>

            <Modal modalShow={creatNewTeamModal}>
                <div className="modalContainer">
                    <div className="modalContainer_background"
                         onClick={()=>handleCancelBtn("creat")}>
                    </div>
                    <CreateNewTeam/>
                </div>

            </Modal>

            <Modal modalShow={editModalShow}>
                <div className="modalContainer">
                    <div className="modalContainer_background"
                         onClick={()=>handleCancelBtn("edit")}>
                    </div>
                    <EditTeamModal/>
                </div>

            </Modal>
        </div>
    )

}

export default TeamDashboard





