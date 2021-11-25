import React, {useContext} from 'react';
import {Route, Redirect} from "react-router-dom";
import {Context} from "../../App";

const ProtectedRout =({isAuth, Component, ...rest})=> {

    const ProtectedContext = useContext(Context)

    return (
        <Route {...rest} render = {(props) =>
        {
            if(isAuth){
                 token?  <Component {...props}/> : <Redirect to="/" />
            }else {
                <Redirect to="/" />
            }
        }}/>


    );
}

export default ProtectedRout;