import React, {createContext, useEffect, useState} from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar"
import Dashboard from "./Dashboard";

export const DataContext = createContext(null)


const Index = (props) => {

    const [userInfo, setUserInfo] = useState({})
    const [loading,setLoading] = useState(true)
    // console.log(userInfo)
    const getDataWithToken = async ()=>{
        fetch("/token",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                'x-access-token': localStorage.token
            }
        }).then(res=>res.json()).then(data=> {
            setUserInfo(data);
            setLoading(false)
        })
    }

    useEffect(getDataWithToken, [])

if (loading){
    return (<div>Loading ...</div>)
}else {

    return (
        <DataContext.Provider value={{userInfo, setUserInfo}}>
        <div>
            <Navbar/>
            <div className="containerForDashboard">
                <Sidebar/>
                <Dashboard/>
            </div>

        </div>

        </DataContext.Provider>
    );
}
}

export default Index;
