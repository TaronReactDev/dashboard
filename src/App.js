import Registr from "./components/registrationPage/registr"
import LoginPage from "./components/loginPage/login"
import {BrowserRouter as Router, Switch, Route, useHistory} from "react-router-dom"
import AdminDashboard from "./components/adminDashboard/Admin";
import ProtectedRout from "./components/protectedRout/protectedRout";
import {useContext, createContext} from "react";
import UserDashboard from "./components/userDashboard/User"

export const Context = createContext();


const isAuth = localStorage.token

function App() {

    const history = useHistory();



    return (
        <Router>
            <Switch>
                <Context.Provider value={{history}} >
                    <Route  path="/" exact > <LoginPage/> </Route>
                    <Route  path="/registration" exact > <Registr/> </Route>
                    <ProtectedRout path="/admin" isAuth  Component={AdminDashboard}/>
                    {/*//<UserDashboard/>*/}
                    {/*<ProtectedRout path="/user" isAuth={localStorage.getItem("auth")} Component={UserDashboard}/>*/}
                </Context.Provider>
            </Switch>
        </Router>
    );
}

export default App;
