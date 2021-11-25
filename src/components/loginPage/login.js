import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom"
import axios from "axios";
import {validation} from "./../validation/validationFunction";

const LoginPage = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [errorUsername, seterrorUsername] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)

    const [homePage, setHomePage] = useState(false)

    const handleChangeLogin = (type) => (e) => {
        switch (type) {
            case "username":
                setUsername(e.target.value);
                validation(username, "username") ? seterrorUsername(false) : seterrorUsername(true);
                break;

            case "password":
                setPassword(e.target.value);
                validation(password, "password") ? setErrorPassword(false) : setErrorPassword(true);

                break;

        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        if(!errorUsername && !errorPassword && username.length !==0 && password.length !== 0){
            const LoginInfo = {
                username,
                password
            }
            try {
                const login = await axios.post(`/api/user/login`, LoginInfo)
                if (login.data) {
                    window.localStorage.setItem("auth", login.data.token)
                }

            } catch (e) {
                console.error(e)
            }
        }


    }


    return (

        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>

                    <TextField error={errorUsername} label="User Name" variant="standard" value={username}
                               onChange={handleChangeLogin("username")}/>

                    <TextField
                        error={errorPassword}
                        label="Password"
                        type="password"
                        variant="standard"
                        value={password} onChange={handleChangeLogin("password")}
                    />
                </div>

            </Box>

            <Stack spacing={2} direction="column">
                <Button variant="text" onClick={handleLogin}>LOGIN</Button>
                <Button variant="text"> <Link to="/regitration">REGISTRATION </Link></Button>
            </Stack>


        </>
    );
}

export default LoginPage;