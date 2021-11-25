import Registr from "./components/registrationPage/registr"
import LoginPage from "./components/loginPage/login"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import AdminDashboard from "./components/dashboard/Admin";
import ProtectedRout from "./components/protectedRout/protectedRout";
import {useContext, createContext, useEffect, useState} from "react";
import {Link, Redirect, useHistory} from "react-router-dom"

import axios from "axios";

export const Context = createContext()

function App() {

    const [isAuth, setIsAuth] = useState(localStorage.token)

    // const [loading, setLoading] = useState(true)
    //
    // const getTokenData = ()=>{
    //     // const data = await axios.get("/", localStorage.token)
    //     fetch('/',{
    //         method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'x-access-token':localStorage.token
    //         }}).then(function(response){
    //             return response.json();
    //         })
    //         .then(function(myJson) {
    //             console.log(myJson)
    //             setLoading(false);
    //         });
    //
    // }
    //
    // useEffect(getTokenData,[])

    // if (loading){
    //     return (
    //         <div>
    //             Loading ...
    //         </div>
    //     )
    // }
    // else {

    const history = useHistory()

    return (
        <Router>
            <Switch>
                <Context.Provider value={history}>

                    <Route exact path="/"> <LoginPage/> </Route>
                    <Route exact path="/registration"> <Registr/> </Route>
                    {/*<Route path="/admin"> <AdminDashboard/> </Route>*/}


                    <ProtectedRout path="/admin" isAuth={isAuth} Component={AdminDashboard}/>
                    {/*<ProtectedRout path="/user" isAuth={localStorage.getItem("auth")} Component={UserDashboard}/>*/}
                </Context.Provider>
            </Switch>
        </Router>
    );
    // }
}

export default App;
