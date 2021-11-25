import React, {useState, useEffect} from 'react';
import DashboardHeader from "./DashboardHeader";
import DashboardBody from "./DashboardBody";
import Modal from "./Modal";
import ViewForModal from "./ViewForModal";
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

    const [viewModalShow, setViewModalShow] = useState(false)

    const [viewOneUser, setViewOneUser] = useState("")

    useEffect(async ()=>{
        try {
            const data = await axios.get(`/api/user/login`)

            setUserInfo(data)

        } catch (e) {
            console.error(e)
        }

    },[])





    const handleView = (id ) => () => {

        const filteredUser = userInfo.filter((el) => {
            return el.Id == id
        });

                setViewOneUser(filteredUser[0]);
                setViewModalShow(true);
        }


    const handleCancelBtn = () => {


                setViewModalShow((prev) => !prev);

    }

//**********   API    *********************************************
    const handleDelete = () => {
    }

//**********   API    *********************************************

    return (
        <div className="dashboard">



            <table className="dashboardtable">
                <DashboardHeader/>
                {userInfo.map(el => {
                    return <DashboardBody
                        key={el.Id}
                        el={el} handleView={handleView}/>
                })}
            </table>


            <Modal modalShow={viewModalShow}>
                <div className="modalContainer">
                    <div className="modalContainer_background"
                         onClick={handleCancelBtn}>
                    </div>
                    <ViewForModal viewOneUser={viewOneUser}/>
                </div>

            </Modal>





        </div>

);
}


export default Dashboard;