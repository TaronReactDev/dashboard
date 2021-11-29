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
    const [teamInfo,setTeamInfo] = useState()
    const [isAdmin,setIsAdmin] = useState()
    const [loading,setLoading] = useState(true)
    const [dashboard, setDashboard] = useState("user")



    const getDataWithToken = async ()=>{
        fetch("/token",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                'x-access-token': localStorage.token
            }
        }).then(res=>res.json()).then(data=> {
            setIsAdmin(data.isAdmin);
            setUserInfo(data.userData);
            setTeamInfo(data.teamData);
            setLoading(false)
        })
    }

    useEffect(getDataWithToken, [])

if (loading){
    return (<div>Loading ...</div>)
}else {

    return (
        <DataContext.Provider value={{userInfo, setUserInfo, isAdmin, teamInfo}}>
        <div>
            <Navbar/>
            { isAdmin ? <div className="containerForDashboard">
                    <Sidebar setDashboard={setDashboard}/>
                    <UsersDashboard visible={dashboard === "user" ? '' : 'none'}/>
                    <TeamDashboard visible={dashboard === "team" ? '' : 'none'}/>
            </div> : <div className="containerForDashboard">
                <SidebarForUser teamName={userInfo.team}/>
                <UsersTeamDB />
            </div>}

        </div>

        </DataContext.Provider>
    );
}
}

            {/*{if(isAdmin){*/}
            {/*    return(*/}
            {/*    <div className="containerForDashboard">*/}
            {/*    <Sidebar setDashboard={setDashboard}/>*/}
            {/*    <UsersDashboard visible={dashboard === "user" ? '' : 'none'}/>*/}
            {/*    <TeamDashboard visible={dashboard === "team" ? '' : 'none'}/>*/}
            {/*    </div>)*/}
            {/*}*/}
            {/*    }*/}
export default Index;
