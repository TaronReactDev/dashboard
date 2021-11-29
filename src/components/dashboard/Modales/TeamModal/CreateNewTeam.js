import React, {useContext, useState} from 'react';
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

import axios from "axios";
import {DataContext} from "../../index";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";

const CreateNewTeam = ({handleCloseCreateingTeamModal}) => {
    const {teamInfo} = useContext(DataContext)

    const [name, setName] = useState("")
    const [maxCountOfMembers, setMaxCountOfMembers] = useState("")

    const [errorTeamName, setErrorTeamName] = useState("")
    const [errorMaxCountOfMembers, setErrorMaxCountOfMembers] = useState("")


// *************   API    **********************
    const handleCreatNewTeam = async () => {

        const registrationInfo = {
            name,
            maxCountOfMembers
        }
        try {
            const registration = await axios.post(`/api/admin/addTeam`, registrationInfo);

            handleCancelCreatNewTeam()
        } catch (e) {
            console.error(e)
        }

    }

    // *************   API    **********************

    const handleChangeTeamInfo = (type) => (e) => {
        switch (type) {
            case "teamName" :
                setName(e.target.value);
                e.target.value ? setErrorTeamName(false) : setErrorTeamName(true);
                break;

            case "maxCountOfMembers" :
                setMaxCountOfMembers(e.target.value);
                e.target.value  ? setErrorMaxCountOfMembers(false) : setErrorMaxCountOfMembers(true);
                break;


        }
    }


    const handleCancelCreatNewTeam = () => {
        console.log("sadasd")
        handleCloseCreateingTeamModal()
        clearState()
    }
    const clearState = () => {
        setName("");
        setMaxCountOfMembers("");

        setErrorTeamName("");
        setErrorMaxCountOfMembers("");

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
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 215 }}>
                        <TextField error={errorTeamName} label="Team Name" variant="standard" value={name}
                                   onChange={handleChangeTeamInfo("teamName")}
                                   />
                        {errorTeamName ? <FormHelperText>"Team name can't be empty."</FormHelperText>  : ""}
                    </FormControl>

                    <TextField error={errorMaxCountOfMembers} label="Max count of members" variant="standard" value={maxCountOfMembers}
                               onChange={handleChangeTeamInfo("maxCountOfMembers")}
                               helperText={errorMaxCountOfMembers ? "Max count of members can't be empty" : ""}
                    />

                </div>

            </Box>

            <Stack spacing={2} direction="column">
                <Button variant="text"
                        onClick={handleCreatNewTeam}> Add </Button>
                <Button variant="text" onClick={handleCancelCreatNewTeam}> Cancel </Button>
            </Stack>
        </div>
    );
}

export default CreateNewTeam;



