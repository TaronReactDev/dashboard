import React, {useState} from 'react';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Link} from "react-router-dom";
import {validation} from "./../validation/validationFunction";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import axios from "axios";


const Registr = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    const [errorFirstName, setErrorFirstName] = useState("")
    const [errorLastName, setErrorLastName] = useState("")
    const [errorUsername, setErrorUsername] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("")


    const handleChangeRegistration = (type) => (e) => {
        switch (type) {
            case "firstName" :
                setFirstName(e.target.value);
                e.target.value ? setErrorFirstName(false) : setErrorFirstName(true);
                break;

            case "lastName" :
                setLastName(e.target.value);
                e.target.value ? setErrorLastName(false) : setErrorLastName(true);

                break;

            case "username" :
                setUsername(e.target.value);
                validation(username, "username") ? setErrorUsername(false) : setErrorUsername(true);
                break;

            case "dateOfBirth" :
                setDateOfBirth(e.target.value);
                break;

            case "gender" :
                setGender(e.target.value);
                break;

            case "email" :
                setEmail(e.target.value);
                validation(email, "email") ? setErrorEmail(false) : setErrorEmail(true);
                break;

            case "password" :
                setPassword(e.target.value);
                validation(password, "password") ? setErrorPassword(false) : setErrorPassword(true);
                break;
            case "confirmPassword" :
                setConfirmPassword(e.target.value);
                validation(confirmPassword, "confirmPassword") ? setErrorConfirmPassword(false) : setErrorConfirmPassword(true);
                break;

        }


    }

    const handleRegistration = async () => {


              const registrationInfo = {
                  firstName,
                  lastName,
                  username,
                  dateOfBirth,
                  gender,
                  email,
                  password
              }
              try {
                  const registration = await axios.post(`/api/user/register`, registrationInfo);
                  console.log()(registration.data.message)

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

                    <TextField error={errorFirstName} label="First Name" variant="standard" value={firstName}
                               onChange={handleChangeRegistration("firstName")} helperText={errorFirstName ? "first name can't be empty." : "" }
                    />

                    <TextField error={errorLastName} label="Last Name" variant="standard" value={lastName}
                               onChange={handleChangeRegistration("lastName")} helperText={errorLastName ? "last name can't be empty." : ""}/>

                    <TextField error={errorUsername} label="User Name" variant="standard" value={username}
                               onChange={handleChangeRegistration("username")}
                               helperText={errorUsername ? "User name user name must be 3 or more characters" :""}
                    />


                    <TextField
                               label="Birthday" variant="standard" value={dateOfBirth}
                               type="date"
                               defaultValue="2017-05-24"
                               onChange={handleChangeRegistration("dateOfBirth")} autoComplete
                               sx={{width: 220}}
                               InputLabelProps={{
                                   shrink: true,
                               }}
                    />


                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group" onChange={handleChangeRegistration("gender")}>

                            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                        </RadioGroup>
                    </FormControl>


                    <TextField error={errorEmail}
                               label="Email" variant="standard" value={email}
                               onChange={handleChangeRegistration("email")}
                               helperText={errorEmail ? "invalid email address" : ""}

                    />

                    <TextField
                        error={errorPassword}
                        label="Password"
                        type="password"
                        variant="standard"
                        value={password} onChange={handleChangeRegistration("password")}
                        helperText={errorPassword ? "password must be at least 8 characters with 1 upper case letter and 1 number" : ""}
                    />
                    <TextField
                        error={errorConfirmPassword}
                        label="Confirm Password"
                        type="password"
                        variant="standard"
                        value={confirmPassword} onChange={handleChangeRegistration("confirmPassword")}
                        helperText={errorConfirmPassword ? "password must be at least 8 characters with 1 upper case letter and 1 number" : ""}

                    />
                </div>

            </Box>


            <Stack spacing={2} direction="column">
                <Button variant="text"
                    onClick={handleRegistration} > REGISTR </Button>
                <Button variant="text"> <Link to="/"> LOGIN </Link>  </Button>
            </Stack>
        </>
    );
}

export default Registr;



