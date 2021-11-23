import Registr from "./components/registrationPage/registr"
import LoginPage from "./components/loginPage/login"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import AdminDashboard from "./components/adminDashboard/adminDashboard";


function App() {
    return (
        // <Router>
        //     <Switch>
        //         <Route path="/" exact>
        //             <LoginPage/>
        //         </Route>
        //
        //         <Route path="/regitration">
        //             <Registr/>
        //         </Route>
        //     </Switch>
        // </Router>
        <AdminDashboard/>
    );
}

export default App;
