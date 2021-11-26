import Registr from "./components/registrationPage/registr"
import LoginPage from "./components/loginPage/login"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import AdminDashboard from "./components/dashboard";
import ProtectedRoute from "./components/protectedRout/protectedRout";
import {createContext, useEffect, useState} from "react";

export const Context = createContext(null);


function App() {

    const [token, setToken] = useState(localStorage.token)
    const [userData, setUserData] = useState()


    console.log("local", localStorage.token)

    return (

        <Router>
            <Switch>
                <Context.Provider value={{setToken, token, setUserData}}>
                    <ProtectedRoute path="/" isAuth  exact Component={<LoginPage/>}/>
                    <ProtectedRoute path="/registration" isAuth Component={<Registr/>}/>
                    <ProtectedRoute path="/admin"   Component={AdminDashboard}/>
                </Context.Provider>
            </Switch>
        </Router>
    );
}

export default App;
