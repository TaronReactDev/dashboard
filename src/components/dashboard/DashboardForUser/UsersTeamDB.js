import React, {useState, useEffect, useContext} from 'react';
import {Button} from "@mui/material";
import DashboardHeader from "./DashboardHeader";
import DashboardBody from "./DashboardBody";
import Modal from "../Modales/Modal";
import ViewForModal from "../Modales/ModalUser/ViewForModal";
import axios from "axios";
import {DataContext} from "../index";
import {Route, Switch, Link} from 'react-router-dom'


const UsersTeamDB = (props) => {

    const {userInfo, isAdmin, teamInfo} = useContext(DataContext)
    const [viewModalShow, setViewModalShow] = useState(false)

    const [viewOneUser, setViewOneUser] = useState("")


    const handleViewOrEdit = (id, actionType) => () => {
        const filteredUser = teamInfo.filter((el) => {
            return el.Id == id
        });

        switch (actionType) {
            case  "view":
                setViewOneUser(filteredUser[0]);
                setViewModalShow(true);
        }
    }


    const handleCancelBtn = (type) => () => {
        console.log(type)
        switch (type) {
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
            <table className="dashboardtable">
                <DashboardHeader/>

                {teamInfo.map(el => {
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

        </div>
    );
}

export default UsersTeamDB;