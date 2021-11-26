import React, {useContext} from 'react';
import {Route, Redirect} from "react-router-dom";
import {Context} from "../../App";

const ProtectedRout =({ Component, ...rest})=> {

    const {token} = useContext(Context)


    return (
        <Route {...rest} render = {(props) =>

        {
            if(token){

                return <Component {...props}/>
            }else {
             return   <Redirect to="/" />
            }
        }}/>
    );
}

export default ProtectedRout;