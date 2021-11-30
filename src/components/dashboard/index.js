import React, {createContext, useEffect, useState} from 'react';
import Navbar from "./Menu/Navbar";
import Sidebar from "./Menu/Sidebar"
import SidebarForUser from "./Menu/SidebarForUser"
import UsersDashboard from "./UserDashboard/UsersDashboard";
import TeamDashboard from "./TeamDashboard/TeamDashboard";
import UsersTeamDB from "./DashboardForUser/UsersTeamDB";

export const DataContext = createContext(null)

const Index = (props) => {

    const [userInfo, setUserInfo] = useState({})
    const [teamInfo, setTeamInfo] = useState()
    const [isAdmin, setIsAdmin] = useState()
    const [loading, setLoading] = useState(true)
    const [dashboard, setDashboard] = useState("user")


    const [addingModalShow, setAddingModalShow] = useState(false)
    const [editModalShow, setEditModalShow] = useState(false)
    const [viewModalShow, setViewModalShow] = useState(false)

    const [editedUser, setEditedUser] = useState("")
    const [viewOneUser, setViewOneUser] = useState("")


    const [creatNewTeamModal, setCreatNewTeamModal] = useState(false)
    const [editedTeam, setEditedTeam] = useState("")
    const [viewOneTeam, setViewOneTeam] = useState("")


    const getDataWithToken = async () => {
        fetch("/token", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.token
            }
        }).then(res => res.json()).then(data => {
            setIsAdmin(data.isAdmin);
            setUserInfo(data.userData);
            setTeamInfo(data.teamData);
            setLoading(false)
        })
    }
    useEffect(getDataWithToken, [])


    const handleCancelBtn = (type)  => {
        console.log(type)
        switch (type) {
            case "adding" :
                setAddingModalShow((prev) => !prev);
                break;
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

    const handleViewOrEdit = (id, actionType, modalName) => () => {
        if (modalName === "teamModal") {

            const filteredTeam = teamInfo.filter((el) => {
                return el.Id === id
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

        } else {

            const filteredUser = userInfo.filter((el) => {
                return el.Id === id
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
    }

    const handleAddNewUserModal = () => {
        setAddingModalShow(true)
    }
    const handleCreatNewTeamModal = () => {
        setCreatNewTeamModal(true)
    }

    const handleDelete = (id, url) =>()=> {
        try {
            fetch(`${url}`, {
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
            }).then(res => res.json()).then(data => {
                if (url === "/api/admin/delete"){
                    setUserInfo(data.userData);
                }
                else if (url === "/api/admin/deleteTeam"){
                setTeamInfo(data.teamData)
                }
            })
        } catch (e) {
            console.error(e)
        }
    }


    if (loading) {
        return (<div>Loading ...</div>)
    } else {
        return (
            <DataContext.Provider value={
                {
                    userInfo,
                    setUserInfo,
                    isAdmin,
                    teamInfo,
                    setTeamInfo,
                    handleAddNewUserModal,
                    handleViewOrEdit,
                    viewModalShow,
                    handleCancelBtn,
                    viewOneUser,
                    addingModalShow,
                    editModalShow,
                    editedUser,
                    handleCreatNewTeamModal,
                    viewOneTeam,
                    creatNewTeamModal,
                    editedTeam,
                    handleDelete

                }
            }>
                <div>
                    <Navbar/>
                    {isAdmin ? <div className="containerForDashboard">
                        <Sidebar setDashboard={setDashboard}/>
                        <UsersDashboard visible={dashboard === "user" ? '' : 'none'}/>
                        <TeamDashboard visible={dashboard === "team" ? '' : 'none'}/>
                    </div> : <div className="containerForDashboard">
                        <SidebarForUser teamName={userInfo.team}/>
                        <UsersTeamDB/>
                    </div>}

                </div>

            </DataContext.Provider>
        );
    }
}

export default Index;
