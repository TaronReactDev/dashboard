import React, {useContext} from 'react';
import {Route, Redirect} from "react-router-dom";
import {Context} from "../../App";

const ProtectedRout =({isAuth, Component, ...rest})=> {

    const {token} = useContext(Context)
    return (
        <Route {...rest} render = {(props) =>


        {
            console.log(rest, "rest")
            if(isAuth){
                return  token ? <Component {...props}/> : <Redirect to="/" />
            }else {
             return  token ?  <Component {...props}/> : <Redirect to="/" />
            }
        }}/>
    );
}

export default ProtectedRout;