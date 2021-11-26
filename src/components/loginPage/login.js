import React, {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom"
import axios from "axios";
import {validation} from "./../validation/validationFunction";
import {Context} from "../../App";
import { useHistory } from "react-router-dom";

const LoginPage = ({handle}) => {
    const history = useHistory();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [errorUsername, setErrorUsername] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)

    const {setUserData, setToken} = useContext(Context)


    const handleChangeLogin = (type) => (e) => {
        switch (type) {
            case "username":
                setUsername(e.target.value);
                validation(username, "username") ? setErrorUsername(false) : setErrorUsername(true);
                break;

            case "password":
                setPassword(e.target.value);
                validation(password, "password") ? setErrorPassword(false) : setErrorPassword(true);

                break;

        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();

            const LoginInfo = {
                username,
                password
            }
            try {
                const login = await axios.post(`/api/user/login`, LoginInfo)
                if (login.data) {
                    window.localStorage.setItem("token", login.data.token)
                    setUserData(login.data)
                    history.push("/admin");
                }

            } catch (e) {
                console.error(e)
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
                <Button variant="text" onClick={handleLogin } >LOGIN</Button>
                <Button variant="text"> <Link to="/registration">REGISTRATION </Link></Button>
            </Stack>

        </>
    );
}

export default LoginPage;