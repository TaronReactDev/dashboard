import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FemaleAvatar from "../../../../icon/avatar.png"
import MaleAvatar from "../../../../icon/man.png"
import {useContext} from "react";
import {DataContext} from "../../index";


export default function ViewForModal() {

    const {viewOneUser} = useContext(DataContext)
    return (

        <div className="formContainer">
            <Card sx={{maxWidth: 345}}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                            {viewOneUser.gender.toLowerCase() === "male" ?
                                <img src={MaleAvatar} style={{width: "30px"}} alt="avatar"/>
                                :
                                <img src={FemaleAvatar} alt="avatar" style={{width: "30px"}}/>}
                        </Avatar>
                    }
                    title={viewOneUser.firstName + " " + viewOneUser.lastName}
                    subheader={viewOneUser.birthday}
                />

                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        User Name - {viewOneUser.username}
                    </Typography> <Typography variant="body2" color="text.secondary">
                        Email - {viewOneUser.email}
                </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Team - {viewOneUser.team}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}