import React, {useContext} from 'react';
import {Route, Redirect} from "react-router-dom";

const ProtectedRout =({isAuth, Component, ...rest})=> {

    return (
        <Route {...rest} render = {(props) =>
        {
            if(isAuth){


                  return <Component {...props}/>


            }else {
             return  <Redirect to="/" />
            }
        }}/>


    );
}

export default ProtectedRout;