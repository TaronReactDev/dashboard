import React, {useContext, useEffect, useState} from 'react';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {validation} from "../../../validation/validationFunction";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from "axios";
import {DataContext} from "../../index";

const EditForModal = ({handleCloseEditingUserModal, editedUser}) => {

    const {teamInfo, handleCancelBtn} = useContext(DataContext)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [gender, setGender] = useState("")
    const [team, setTeam] = useState("")
    const [email, setEmail] = useState("")

    const [errorFirstName, setErrorFirstName] = useState("")
    const [errorLastName, setErrorLastName] = useState("")
    const [errorUsername, setErrorUsername] = useState("")
    const [errorEmail, setErrorEmail] = useState("")

    useEffect(() => {
        const {Id, firstName, lastName, username, dateOfBirth, gender, team, email} = editedUser;

        setFirstName(firstName);
        setLastName(lastName);
        setUsername(username);
        setDateOfBirth(dateOfBirth);
        setGender(gender);
        setTeam(team);
        setEmail(email);

    }, [])

    const clearState = () => {
        setFirstName("");
        setLastName("");
        setUsername("");
        setDateOfBirth("");
        setGender("");
        setTeam("");
        setEmail("");

        setErrorFirstName("");
        setErrorLastName("");
        setErrorUsername("");
        setErrorEmail("");

    }

    const handleSaveEdit = async () => {
        if( firstName && lastName && username && dateOfBirth && gender && team && email &&
            !errorFirstName && !errorLastName && !errorUsername && !errorEmail ){
            return
        }
        const editInfo = {
            Id: editedUser.Id,
            firstName,
            lastName,
            username,
            dateOfBirth,
            gender,
            email,
            team
        }
        try {
            const edit = await axios.put(`/api/admin/edit`, editInfo);
            handleCancelBtn("edit");
            window.location.reload();
        } catch (e) {
            console.error(e)
        }
    }

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

            case "team" :
                setTeam(e.target.value);
                break;

            case "email" :
                setEmail(e.target.value);
                validation(email, "email") ? setErrorEmail(false) : setErrorEmail(true);
                break;
        }
    }

    const handleCloseEditingModal = () => {
        handleCancelBtn("edit")
        clearState()
    }

    return (
        <div className="formContainer">
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
                               onChange={handleChangeRegistration("firstName")}
                               helperText={errorFirstName ? "first name can't be empty." : ""}
                    />
                    <TextField error={errorLastName} label="Last Name" variant="standard" value={lastName}
                               onChange={handleChangeRegistration("lastName")}
                               helperText={errorLastName ? "last name can't be empty." : ""}/>
                    <TextField error={errorUsername} label="User Name" variant="standard" value={username}
                               onChange={handleChangeRegistration("username")}
                               helperText={errorUsername ? "User name user name must be 3 or more characters" : ""}
                    />
                    <TextField
                        label="Birthday" variant="standard" value={dateOfBirth}
                        type="date"
                        defaultValue={dateOfBirth}
                        onChange={handleChangeRegistration("dateOfBirth")} autoComplete
                        sx={{width: 220}}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group"
                                    onChange={handleChangeRegistration("gender")}>

                            <FormControlLabel value="female" control={<Radio/>} label="Female"
                                              checked={gender.toLowerCase() === "female"}/>
                            <FormControlLabel value="male" control={<Radio/>} label="Male"
                                              checked={gender.toLowerCase() === "male"}/>
                        </RadioGroup>
                    </FormControl>


                    <FormControl variant="standard" sx={{m: 1, minWidth: 215}}>
                        <InputLabel id="demo-simple-select-standard-label">Team</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={team}
                            label="Team"
                            onChange={handleChangeRegistration("team")}
                        >

                            {teamInfo.map(el => <MenuItem value={el.name}>{el.name}</MenuItem>)}


                        </Select>
                    </FormControl>


                    <TextField error={errorEmail}
                               label="Email" variant="standard" value={email}
                               onChange={handleChangeRegistration("email")}
                               helperText={errorEmail ? "invalid email address" : ""}
                    />
                </div>
            </Box>

            <Stack spacing={2} direction="column">
                <Button variant="text"
                        onClick={handleSaveEdit}> Save Edit </Button>
                <Button variant="text" onClick={handleCloseEditingModal}> Cancel </Button>
            </Stack>
        </div>
    );
}

export default EditForModal;
