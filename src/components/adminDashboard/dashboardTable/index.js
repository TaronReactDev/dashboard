import React, {useState, useEffect} from 'react';
import DashboardTable from "./dashboardTable";
import DashboardHeaders from "./dashboardHeaders";
import axios from "axios"


function Index(props) {
    const [questionInfo, setQuestionInfo] = useState([])


    useEffect(() => {

        const getData = async () => {
            try {
                const res = await axios.get('/api/question/list');
                setQuestionInfo(res.data)
            } catch (e) {
                console.error(e);
            }
        }
        getData();


    }, [])


    return (
        <>

            <table className="dashboardTable">
                <DashboardHeaders/>
                {questionInfo.map((el, index) => {
                    return <DashboardTable //key={el._id} id={el._id}
                        // el={el}
                        //handleViewOrEdit={handleViewOrEdit}
                        // handleDelete={handleDelete}
                    />
                })
                }
            </table>


        </>
    );
}

export default Index;