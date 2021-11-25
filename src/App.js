import Registr from "./components/registrationPage/registr"
import LoginPage from "./components/loginPage/login"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import AdminDashboard from "./components/dashboard/Admin";
import ProtectedRout from "./components/protectedRout/protectedRout";
import {useContext, createContext} from "react";

export const Context = createContext()

function App() {
    return (
        <Router>
            <Switch>
                <Context.Provider value={localStorage.getItem("auth")}>
                    <ProtectedRout exact path="/" Component={LoginPage}/>
                    <ProtectedRout path="/registration" Component={Registr}/>
                    <ProtectedRout path="/admin" isAuth token={localStorage.getItem("auth")} Component={AdminDashboard}/>
                    {/*<ProtectedRout path="/user" isAuth={localStorage.getItem("auth")} Component={UserDashboard}/>*/}
                </Context.Provider>
            </Switch>
        </Router>
    );
}

export default App;
