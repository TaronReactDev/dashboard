import Registr from "./components/registrationPage/registr"
import LoginPage from "./components/loginPage/login"
import {BrowserRouter as Router, Switch, Route, useHistory, Redirect} from "react-router-dom"
import AdminDashboard from "./components/dashboard";
import ProtectedRoute from "./components/protectedRout/protectedRout";
import {createContext,  useState} from "react";

export const Context = createContext(null);


function App() {

    const history = useHistory()

    const [token, setToken] = useState(!!localStorage.getItem("token"))


    return (

        <Router>
            <Switch>
                <Context.Provider value={{token, history}}>

                    { localStorage.getItem("token") ?
                        <ProtectedRoute path="/admin" Component={AdminDashboard}/>

                        :  <Route path="/" exact> <LoginPage/> </Route>}


                        <Route path="/registration"  > <Registr/> </Route>



                </Context.Provider>
            </Switch>
        </Router>
    );
}

export default App;
